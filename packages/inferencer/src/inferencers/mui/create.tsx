import * as RefineMui from "@pankod/refine-mui";
import * as RefineReactHookForm from "@pankod/refine-react-hook-form";

import { createInferencer } from "@/create-inferencer";
import {
    jsx,
    componentName,
    prettyString,
    accessor,
    printImports,
    toPlural,
    toSingular,
    isIDKey,
    dotAccessor,
    noOp,
} from "@/utilities";

import { ErrorComponent } from "./error";
import { LoadingComponent } from "./loading";
import { CodeViewerComponent } from "./code-viewer";

import { InferencerResultComponent, InferField, ImportElement } from "@/types";

/**
 * @experimental This is an experimental component
 */
export const CreateInferencer: InferencerResultComponent = createInferencer({
    type: "create",
    additionalScope: [
        ["@pankod/refine-mui", "RefineMui", RefineMui],
        [
            "@pankod/refine-react-hook-form",
            "RefineReactHookForm",
            RefineReactHookForm,
        ],
    ],
    codeViewerComponent: CodeViewerComponent,
    loadingComponent: LoadingComponent,
    errorComponent: ErrorComponent,
    renderer: ({ resource, fields }) => {
        const COMPONENT_NAME = componentName(resource.name, "create");
        const imports: Array<ImportElement> = [
            ["Create", "@pankod/refine-mui"],
            ["Box", "@pankod/refine-mui"],
            ["useForm", "@pankod/refine-react-hook-form"],
        ];

        const relationFields: (InferField | null)[] = fields.filter(
            (field) => field?.relation && !field?.fieldable && field?.resource,
        );

        const relationHooksCode = relationFields
            .filter(Boolean)
            .map((field) => {
                if (field?.relation && !field.fieldable && field.resource) {
                    imports.push(["useAutocomplete", "@pankod/refine-mui"]);

                    return `
                    const { autocompleteProps: ${
                        field.multiple
                            ? toPlural(field.resource.name)
                            : toSingular(field.resource.name)
                    }AutocompleteProps } =
                    useAutocomplete({
                        resource: "${field.resource.name}",
                    });
                `;
                }
                return undefined;
            })
            .filter(Boolean);

        const renderRelationFields = (field: InferField) => {
            if (field.relation && field.resource) {
                imports.push(
                    ["Autocomplete", "@pankod/refine-mui"],
                    ["Controller", "@pankod/refine-react-hook-form"],
                );
                const variableName = `${
                    field.multiple
                        ? toPlural(field.resource.name)
                        : toSingular(field.resource.name)
                }AutocompleteProps`;

                const optionLabelProperty = field.relationInfer
                    ? field.relationInfer.accessor
                        ? typeof field.relationInfer.accessor === "string"
                            ? field.relationInfer.accessor
                            : field.relationInfer.accessor[0]
                        : "title"
                    : "title";

                // check optionLabelProperty can be accessed via dot notation
                const isBracketNotation =
                    optionLabelProperty.includes(".") ||
                    optionLabelProperty.includes("[") ||
                    optionLabelProperty.includes("]") ||
                    optionLabelProperty.includes("-");

                const optionLabelItemValue = field.accessor
                    ? accessor("item", undefined, field.accessor, false)
                    : "(item?.id ?? item)";

                const optionEqualValue = field.accessor
                    ? accessor("value", undefined, field.accessor, false)
                    : "(value?.id ?? value)";

                const optionChangeValue = field.accessor
                    ? "value"
                    : field.multiple
                    ? "value?.map((item: any) => item?.id ?? item)"
                    : "value?.id ?? value";

                return jsx`
                    <Controller
                        control={control}
                        name="${dotAccessor(field.key, undefined)}"
                        rules={{ required: "This field is required" }}
                        // eslint-disable-next-line
                        ${
                            field.multiple
                                ? "defaultValue={[] as any}"
                                : "defaultValue={null as any}"
                        } 
                        render={({ field }) => (
                            <Autocomplete
                                {...${variableName}}
                                {...field}
                                ${field.multiple ? "multiple" : ""}
                                onChange={(_, value) => {
                                    field.onChange(${optionChangeValue});
                                }}
                                getOptionLabel={(item) => {
                                    return (
                                        ${variableName}?.options?.find(
                                            (p) =>
                                                p?.id?.toString() ===
                                                ${optionLabelItemValue}?.toString(),
                                        )?.${
                                            isBracketNotation
                                                ? `["${optionLabelProperty}"]`
                                                : optionLabelProperty
                                        } ?? ""
                                    );
                                }}
                                isOptionEqualToValue={(option, value) =>
                                    value === undefined ||
                                    option.id.toString() === ${optionEqualValue}?.toString()
                                }
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        label="${prettyString(field.key)}"
                                        margin="normal"
                                        variant="outlined"
                                        error={!!${accessor(
                                            "(errors as any)",
                                            field.key,
                                            field.accessor,
                                            false,
                                        )}}
                                        helperText={${accessor(
                                            "(errors as any)",
                                            field.key,
                                            field.accessor,
                                            false,
                                        )}?.message}
                                        required
                                    />
                                )}
                            />
                        )}
                    />
                `;
            }
            return undefined;
        };

        const basicInputFields = (field: InferField) => {
            if (
                field.type === "text" ||
                field.type === "url" ||
                field.type === "email" ||
                field.type === "number" ||
                field.type === "date" ||
                field.type === "richtext"
            ) {
                if (isIDKey(field.key)) {
                    return undefined;
                }

                imports.push(["TextField", "@pankod/refine-mui"]);

                if (field.multiple) {
                    return undefined;
                }

                return jsx`
                    <TextField
                        {...register("${dotAccessor(
                            field.key,
                            undefined,
                            field.accessor,
                        )}", {
                            required: "This field is required",
                        })}
                        error={!!${accessor(
                            "(errors as any)",
                            field.key,
                            field.accessor,
                            false,
                        )}}
                        helperText={${accessor(
                            "(errors as any)",
                            field.key,
                            field.accessor,
                            false,
                        )}?.message}
                        margin="normal"
                        fullWidth
                        InputLabelProps={{ shrink: true }}
                        ${
                            field.type !== "date" && field.type !== "richtext"
                                ? `type="${field.type}"`
                                : ""
                        }
                        ${field.type === "richtext" ? "multiline" : ""}
                        label="${prettyString(field.key)}"
                        name="${dotAccessor(
                            field.key,
                            undefined,
                            field.accessor,
                        )}"
                    />
                `;
            }
            return undefined;
        };

        const booleanFields = (field: InferField) => {
            if (field.type === "boolean") {
                imports.push(
                    ["Checkbox", "@pankod/refine-mui"],
                    ["FormControlLabel", "@pankod/refine-mui"],
                    ["Controller", "@pankod/refine-react-hook-form"],
                );

                if (field.multiple) {
                    return undefined;
                }

                return jsx`
                    <Controller
                        control={control}
                        name="${dotAccessor(
                            field.key,
                            undefined,
                            field.accessor,
                        )}"
                        // eslint-disable-next-line
                        defaultValue={null as any}
                        render={({ field }) => (
                            <FormControlLabel label="${prettyString(
                                field.key,
                            )}" control={
                                <Checkbox
                                    {...field}
                                    checked={field.value}
                                    onChange={(event) => {
                                        field.onChange(event.target.checked);
                                    }}
                                />
                            } />
                        )}
                    />
                `;
            }
            return undefined;
        };

        const dateFields = (field: InferField) => {
            if (field.type === "date") {
                const basicRender = basicInputFields(field);

                return `
                    {/* 
                        DatePicker component is not included in "@pankod/refine-mui" package.
                        To use a <DatePicker> component, you can follow the official documentation for Material UI.
                        
                        Docs: https://mui.com/x/react-date-pickers/date-picker/#basic-usage
                    */}
                    ${basicRender ?? ""}
                    `;
            }
            return undefined;
        };

        const renderedFields: Array<string | undefined> = fields.map(
            (field) => {
                switch (field?.type) {
                    case "text":
                    case "number":
                    case "email":
                    case "url":
                    case "richtext":
                        return basicInputFields(field);
                    case "date":
                        return dateFields(field);
                    case "boolean":
                        return booleanFields(field);
                    case "relation":
                        return renderRelationFields(field);
                    default:
                        return undefined;
                }
            },
        );

        noOp(imports);

        return jsx`
        ${printImports(imports)}
        
        export const ${COMPONENT_NAME} = () => {
            const {
                saveButtonProps,
                refineCore: { formLoading },
                register,
                control,
                formState: { errors },
            } = useForm();
        
            ${relationHooksCode}

            return (
                <Create isLoading={formLoading} saveButtonProps={saveButtonProps}>
                    <Box
                        component="form"
                        sx={{ display: "flex", flexDirection: "column" }}
                        autoComplete="off"
                    >
                        ${renderedFields.join("")}
                    </Box>
                </Create>
            );
        };
        `;
    },
});

import path from "path";
import { RefineConfig } from "@definitions";

export const getRefineConfig = async (
    packagePath: string,
    isAbsolute?: boolean,
) => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const config = require(path.join(
        isAbsolute ? packagePath : path.join(process.cwd(), packagePath),
        "refine.config.js",
    )) as RefineConfig;

    return config;
};

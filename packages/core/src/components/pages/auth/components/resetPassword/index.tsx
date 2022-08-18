import { useTranslate, useRouterContext, useResetPassword } from "@hooks";
import React, { useState } from "react";
import { IAuthCommonProps, IResetPasswordForm } from "../..";

export const ResetPassword: React.FC<IAuthCommonProps> = ({ backLink }) => {
    const translate = useTranslate();
    const { Link } = useRouterContext();

    const [email, setEmail] = useState("");

    const { mutate: resetPassword } = useResetPassword<IResetPasswordForm>();

    const renderLink = (link: React.ReactNode, text?: string) => {
        if (link) {
            if (typeof link === "string") {
                return <Link to={link}>{text}</Link>;
            } else return link;
        }
        return null;
    };
    return (
        <div>
            <h1 style={{ textAlign: "center" }}>
                {translate("pages.forgot.title", "Forgot Password")}
            </h1>
            <hr />
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    resetPassword({ email });
                }}
            >
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        padding: 25,
                    }}
                >
                    <label>{translate("pages.forgot.email", "Email")}</label>
                    <input
                        type="mail"
                        autoCorrect="off"
                        spellCheck={false}
                        autoCapitalize="off"
                        autoFocus
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <br />
                    <input type="submit" value="Reset Password" />
                    {backLink &&
                        renderLink(
                            backLink,
                            translate("pages.forgot.back", "Back"),
                        )}
                </div>
            </form>
        </div>
    );
};

"use client";

import Footer from "@/components/layout/panel/Footer";
import * as React from "react";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";
import {Form, Input, Select, SelectItem, Checkbox, Button} from "@nextui-org/react";
import {loginUser} from "@/app/utils/auth";
import { useRouter } from 'next/navigation';
import Cookies from "js-cookie";

const AuthPage = () => {

    const [password, setPassword] = React.useState("");
    const [errors, setErrors] = React.useState({});
    const router = useRouter();

    const getPasswordError = (value:any) => {
        return null;
    };

    const onSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.currentTarget));
        const newErrors = {};
        const passwordError = getPasswordError(data.password);

        if (passwordError) {
            newErrors.password = passwordError;
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }
        // Clear errors and submit

        setErrors({});

        const login = await loginUser(data.email, data.password);

        if(login.success){
            Cookies.set('token', login.token);
            router.push('/admin/dashboard');
        }
        // setSubmitted(data);
    };

    return (
                <Card className="m-6 w-[500px] shadow-none">
                    <CardHeader className="flex gap-3 justify-center items-center">
                        <Image
                            alt="nextui logo"
                            height={40}
                            radius="sm"
                            src="/logo.png"
                            width={40}
                        />
                        <div className="flex flex-col">
                            <p className="text-md font-bold">SimpleCMPOS</p>
                            <p className="text-small text-default-500">Not just a POS</p>
                        </div>
                    </CardHeader>
                    <Divider />
                    <CardBody>
                        <Form
                            className="w-full justify-center items-center space-y-4"
                            validationBehavior="native"
                            validationErrors={errors}
                            onSubmit={onSubmit}
                        >
                            <div className="flex flex-col gap-4 w-full">

                                <Input
                                    errorMessage={({validationDetails}) => {
                                        if (validationDetails.valueMissing) {
                                            return "Please enter your email";
                                        }
                                        if (validationDetails.typeMismatch) {
                                            return "Please enter a valid email address";
                                        }
                                    }}
                                    label="Email"
                                    labelPlacement="outside"
                                    name="email"
                                    placeholder="Enter your email"
                                    type="email"
                                />

                                <Input
                                    errorMessage={getPasswordError(password)}
                                    isInvalid={getPasswordError(password) !== null}
                                    label="Password"
                                    labelPlacement="outside"
                                    name="password"
                                    placeholder="Enter your password"
                                    type="password"
                                    value={password}
                                    onValueChange={setPassword}
                                />

                                <Checkbox
                                    classNames={{
                                        label: "text-small",
                                    }}
                                    name="terms"
                                    validationBehavior="aria"
                                    value="true"
                                    onValueChange={() => setErrors((prev) => ({...prev, terms: undefined}))}
                                >
                                    Remember me
                                </Checkbox>

                                <div className="flex gap-4">
                                    <Button className="w-full font-bold" color="secondary" variant={'flat'} type="submit">
                                        LOGIN
                                    </Button>
                                </div>
                            </div>
                        </Form>
                    </CardBody>
                </Card>
        )
        }
        export default AuthPage;
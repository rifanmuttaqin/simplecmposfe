"use client";
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";
import {Button} from "@nextui-org/react";
import React from "react";
import { IconPlus, IconCaretDownFilled } from '@tabler/icons-react';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";
import Image from "next/image";

const ContactPage = () => {
    return (<div className={'p-4 pt-10 flex flex-col gap-4 md:flex-row'}>
        <Card className={'w-full h-full shadow-none'}>
            <CardBody className={'shadow-none'}>
                <div className={'flex flex-row gap-10'}>

                    <div><Button color="primary" variant="solid"><IconPlus stroke={4} /> Add </Button></div>
                    <div className={''}>
                        <Dropdown>
                            <DropdownTrigger>
                                <Button color="primary" variant="solid"> Bulk Action <IconCaretDownFilled stroke={4} /> </Button>
                            </DropdownTrigger>
                            <DropdownMenu aria-label="Static Actions">
                                <DropdownItem key="action_1">Action 1</DropdownItem>
                                <DropdownItem key="action_2">Action 2</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </div>
                </div>
            </CardBody>
        </Card>
    </div>)
        }

        export default ContactPage;
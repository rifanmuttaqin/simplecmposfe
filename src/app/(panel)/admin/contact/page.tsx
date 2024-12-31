"use client";
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";
import {Button} from "@nextui-org/react";
import React from "react";
import { IconPlus, IconCaretDownFilled } from '@tabler/icons-react';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Table,
    TableHeader,
    TableBody,
    TableColumn,
    TableRow,
    TableCell,
    Pagination} from "@nextui-org/react";

const ContactPage = () => {
            return (<div className={'p-4 pt-10 flex flex-col gap-4 md:flex-row'}>
                <Card className={'w-full h-full shadow-none'}>
                    <CardBody className={'shadow-none'}>
                        <div className={'flex flex-col gap-5 lg:flex-row'}>
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
                        <div className={'p-5 flex flex-col gap-5 lg:flex-row'}>
                            <Table aria-label="Example static collection table" className={'shadow-none'}>
                                <TableHeader>
                                    <TableColumn>NAME</TableColumn>
                                    <TableColumn>ROLE</TableColumn>
                                    <TableColumn>STATUS</TableColumn>
                                </TableHeader>
                                <TableBody>
                                    <TableRow key="1">
                                        <TableCell>Tony Reichert</TableCell>
                                        <TableCell>CEO</TableCell>
                                        <TableCell>Active</TableCell>
                                    </TableRow>
                                    <TableRow key="2">
                                        <TableCell>Zoey Lang</TableCell>
                                        <TableCell>Technical Lead</TableCell>
                                        <TableCell>Paused</TableCell>
                                    </TableRow>
                                    <TableRow key="3">
                                        <TableCell>Jane Fisher</TableCell>
                                        <TableCell>Senior Developer</TableCell>
                                        <TableCell>Active</TableCell>
                                    </TableRow>
                                    <TableRow key="4">
                                        <TableCell>William Howard</TableCell>
                                        <TableCell>Community Manager</TableCell>
                                        <TableCell>Vacation</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </div>
                        <div className={'p-5 flex flex-col gap-5 lg:flex-row'}>
                            <Pagination isCompact showControls initialPage={6} total={10} />
                        </div>
                    </CardBody>
                </Card>
            </div>)
        }

        export default ContactPage;
import React, { useState } from "react";
import '../sections/BrandsDesc.css';
import { Link } from 'react-router-dom';
import {
    ChakraProvider,
    Box,
    SimpleGrid,
    GridItem,
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
} from '@chakra-ui/react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function BrandsDesc() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <ChakraProvider >
            <Box w="100vw" p={12}>
                <SimpleGrid columns={[1, 1, 1, 1, 1]} spacing={12}>
                    <GridItem>
                        <Tabs isFitted variant='enclosed'>
                            <TabList>
                                <Tab><img src="./favicon-hankook.png" className="icono-desc" />&nbsp;Hankook</Tab>
                                <Tab><img src="./favicon-dunlop.png" className="icono-desc" />&nbsp;Dunlop</Tab>
                                <Tab><img src="./favicon-nankang.png" className="icono-desc" />&nbsp;Nankang</Tab>
                                <Tab><img src="./favicon-chengshan.png" className="icono-desc" />&nbsp; Chengshan</Tab>
                                <Tab><img src="./favicon-prinx.png" className="icono-desc" />&nbsp;Prinx</Tab>
                                <Tab><img src="./favicon-corghi.png" className="icono-desc" />&nbsp;Corghi</Tab>
                                <Tab><img src="./favicon-westlake.png" className="icono-desc" />&nbsp;Westlake</Tab>
                                <Tab><img src="./favicon-weathertech.png" className="icono-desc" />&nbsp;Weathertech</Tab>
                            </TabList>
                            <TabPanels>
                                <TabPanel>
                                    <Button variant="primary" onClick={handleShow}>
                                        Launch demo modal
                                    </Button>

                                    <Modal show={show} onHide={handleClose} centered>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Hankook</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
                                        <Modal.Footer>
                                            <Link variant="primary" to="https://hankook.com.ve/">
                                                Ir a Hankook
                                            </Link>
                                        </Modal.Footer>
                                    </Modal>
                                </TabPanel>

                                <TabPanel>
                                    <p>Tab panel two</p>
                                </TabPanel>

                                <TabPanel>
                                    <p>Tab panel three</p>
                                </TabPanel>

                                <TabPanel>
                                    <p>Tab panel four</p>
                                </TabPanel>

                                <TabPanel>
                                    <p>Tab panel five</p>
                                </TabPanel>

                                <TabPanel>
                                    <p>Tab panel six</p>
                                </TabPanel>

                                <TabPanel>
                                    <p>Tab panel seven</p>
                                </TabPanel>

                                <TabPanel>
                                    <p>Tab panel eight</p>
                                </TabPanel>
                            </TabPanels>
                        </Tabs>
                    </GridItem>
                </SimpleGrid>
            </Box>
        </ChakraProvider>
    );
}

export default BrandsDesc;
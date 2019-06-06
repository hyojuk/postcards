import React from "react";
import { Link } from "@reach/router";

import {
    Heading,
    Container,
    Measure,
    Text,
    Button,
    ScrollView
} from "../../components/globals";

const LandingPage = () => {
    return (
        <ScrollView>
            <Container my={12}>
                <Heading as="h1" fontSize={6} mt={0}>
                    Take your family with you.
                </Heading>
                <Measure mt={6}>
                    <Text>
                        Aenean quis lacinia tellus. Nulla bibendum est eu tortor
                        tempus ultricies quis ac turpis. Etiam lorem magna,
                        sodales in condimentum quis, dignissim sit amet urna.
                        Nunc quis tristique augue.
                    </Text>
                </Measure>
                <Measure mt={6}>
                    <Button as={Link} to="/login">
                        Log in or sign up
                    </Button>
                </Measure>
            </Container>
        </ScrollView>
    );
};

export default LandingPage;

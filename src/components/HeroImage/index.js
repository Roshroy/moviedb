import React from "react";
//styles
import { Wrapper,Content, Text } from "./HeroImage.styles";

const HeroImage = (prop) =>(
    <Wrapper image={prop.image}>
        <Content>
            <Text>
                <h1>{prop.title}</h1>
                <p>{prop.Text}</p>
            </Text>
        </Content>
    </Wrapper>
);

export default HeroImage;
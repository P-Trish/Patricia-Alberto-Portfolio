import React from 'react';
import { Input, FormControl } from '@chakra-ui/react'

export default function Contact() {
    return (
        <div className="row m-4 height">
            <div className="col-sm-12">
                <h1>Contact Me</h1>
                <form>
                    <Input
                        placeholder="Name"
                        name="name"
                        className="contact-input"
                    ></Input>
                    <FormControl isRequired >
                        <Input
                            placeholder="Email"
                            name="email"
                            className="contact-input"
                        ></Input>
                    </FormControl>
                    <FormControl isRequired >
                        <Input
                            id = "contact-message"
                            placeholder="Message"
                            name="message"
                            className="contact-input"
                        ></Input>
                    </FormControl>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>

        </div>
    )
}
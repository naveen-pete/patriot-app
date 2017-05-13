import { KeyValuePair } from "./key-value-pair";
import { Contact } from "./contact";

export interface Vehicle {
    id: number;
    make: KeyValuePair;
    model: KeyValuePair;
    isRegistered: boolean;
    features: KeyValuePair[];
    contact: Contact;
    lastUpdate: string;
}

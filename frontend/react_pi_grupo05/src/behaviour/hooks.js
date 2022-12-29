import { useState } from "react";

export const useRandomId = () => {
    const uuid = require('uuid');
    const [id, _] = useState(uuid.v4());
    return id;
};
import { createContext } from "react";

import { DataModel } from "../models/data-model";

const Context = createContext<DataModel | undefined>(undefined);

export default Context;

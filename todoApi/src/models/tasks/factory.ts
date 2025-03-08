import mongo from "./mongo";
import { Model } from "./model";

export function getModel(): Model {
    return mongo
}
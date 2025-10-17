import { CharacterAI } from "../client";

export default class ObjectPatcher {
    static patch(client: CharacterAI, instance: any, object: Record<string, any>) {
        for (const [key, value] of Object.entries(object)) {
            if (key == "avatar_file_name" || key == "character_avatar_uri") continue;
            instance[key] = value;
        }
    }
    static clean(object: Record<string, any>) {
        for (const [key, value] of Object.entries(object)) {
            if (value != undefined) continue;
            delete object[key];
        }

        return object;
    }
}
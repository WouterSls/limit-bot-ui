"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function testLogin(email, password) {
    return __awaiter(this, void 0, void 0, function* () {
        const body = {
            email,
            password,
        };
        console.log("body", body);
        try {
            const response = yield fetch("http://localhost:8080/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(body),
            });
            console.log(response.headers.get("Set-Cookie"));
            const data = yield response.json();
            console.log("data:\n", data);
        }
        catch (error) {
            console.error("error during login test", error);
        }
    });
}
testLogin("test@example.com", "password");

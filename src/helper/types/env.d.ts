export { };

declare global {
    namespace NodeJS {
        interface ENV {
            BROWSER: "chrome"|"firefox"|"webkit",
            EVN: "staging"|"prod"|"test",
            BASEURL: string,
            HEAD:"true"|"false"
        }
    }
}
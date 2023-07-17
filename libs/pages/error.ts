export class PageServerSideActionError extends Error {
    constructor(
        public message: string = 'There was an error from the server-side props action.'
    ) {
        super(message);
    }
}

export class ApiServerActionError extends Error {
    constructor(
        public message: string = 'There was an error from the api route action.'
    ) {
        super(message);
    }
}

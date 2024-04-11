export default () => ({
    isLoading: true,
    entries: [
        {
            id: new Date().getTime(),
            date: new Date().toDateString(),
            text : 'Amet id in culpa veniam reprehenderit aliquip aliqua Lorem sint et sunt reprehenderit.',
            picture: null,
        },
        {
            id: new Date().getTime()+1000,
            date: new Date().toDateString(),
            text : 'Pariatur nostrud do consequat incididunt duis pariatur ut exercitation labore nisi.',
            picture: null,
        },
        {
            id: new Date().getTime()+2000,
            date: new Date().toDateString(),
            text : 'Cillum nostrud occaecat ullamco id irure proident tempor cupidatat deserunt dolore laboris commodo laborum.',
            picture: null,
        }
    ]
})
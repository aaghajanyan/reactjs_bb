export let filterData = {
    level: {
            icon: "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzIuNTEgMjIuNTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE3LjMzIDMuNTZoNi4yNHYxOC40N2gtNi4yNHpNMjUuNzcuNWg2LjI0djIxLjUyaC02LjI0ek04LjkzIDYuNTdoNi4yNHYxNS40NUg4Ljkzek0uNSA5LjY3aDYuMjR2MTIuMzZILjV6bTYuMiA5LjE2SC41NG02LjE2LTMuMDVILjU0TTYuNyAxMi44SC41NCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMzEzNDM2IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIvPjwvc3ZnPg==",
            arrowIcon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAMAAABV0m3JAAAAD1BMVEVHcEwvNTUxNDYvNTUxNDaUZ5plAAAABHRSTlMAYO8wBHtyNQAAADdJREFUeNpty0EKAEAIQtEy73/mmUXwEXIR9sAadUVaU7I7zNY/ofuiGOWs9whDMdQYioViKPYAjDEBAxPx53oAAAAASUVORK5CYII=",
            title: "Fitness level",
            data: [
                {   
                    icon: "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzIuNTEgMjIuNTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE3LjMzIDMuNTZoNi4yNHYxOC40N2gtNi4yNHpNMjUuNzcuNWg2LjI0djIxLjUyaC02LjI0ek04LjkzIDYuNTdoNi4yNHYxNS40NUg4Ljkzek0uNSA5LjY3aDYuMjR2MTIuMzZILjV6bTYuMiA5LjE2SC41NG02LjE2LTMuMDVILjU0TTYuNyAxMi44SC41NCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMzEzNDM2IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIvPjwvc3ZnPg==",
                    dataTitle: "Bigginer" 
                },
                {   
                    icon: "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzIuNTEgMjIuNTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE3LjMzIDMuNTZoNi4yNHYxOC40N2gtNi4yNHpNMjUuNzcuNWg2LjI0djIxLjUyaC02LjI0ek04LjkzIDYuNTdoNi4yNHYxNS40NUg4Ljkzek0uNSA5LjY3aDYuMjR2MTIuMzZILjV6bTYuMiA5LjE2SC41NG02LjE2LTMuMDVILjU0TTYuNyAxMi44SC41NCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMzEzNDM2IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIvPjwvc3ZnPg==",
                    dataTitle: "Bigginer/ Intermediate"  
                },
                {   
                    icon: "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzIuNTEgMjIuNTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE3LjMzIDMuNTZoNi4yNHYxOC40N2gtNi4yNHpNMjUuNzcuNWg2LjI0djIxLjUyaC02LjI0ek04LjkzIDYuNTdoNi4yNHYxNS40NUg4Ljkzek0uNSA5LjY3aDYuMjR2MTIuMzZILjV6bTYuMiA5LjE2SC41NG02LjE2LTMuMDVILjU0TTYuNyAxMi44SC41NCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMzEzNDM2IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIvPjwvc3ZnPg==",
                    dataTitle: "Intermediate" 
                },
                {   
                    icon: "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzIuNTEgMjIuNTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE3LjMzIDMuNTZoNi4yNHYxOC40N2gtNi4yNHpNMjUuNzcuNWg2LjI0djIxLjUyaC02LjI0ek04LjkzIDYuNTdoNi4yNHYxNS40NUg4Ljkzek0uNSA5LjY3aDYuMjR2MTIuMzZILjV6bTYuMiA5LjE2SC41NG02LjE2LTMuMDVILjU0TTYuNyAxMi44SC41NCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMzEzNDM2IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIvPjwvc3ZnPg==",
                    dataTitle: "Intermediate/ Advanced" 
                },
                {   
                    icon: "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzIuNTEgMjIuNTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE3LjMzIDMuNTZoNi4yNHYxOC40N2gtNi4yNHpNMjUuNzcuNWg2LjI0djIxLjUyaC02LjI0ek04LjkzIDYuNTdoNi4yNHYxNS40NUg4Ljkzek0uNSA5LjY3aDYuMjR2MTIuMzZILjV6bTYuMiA5LjE2SC41NG02LjE2LTMuMDVILjU0TTYuNyAxMi44SC41NCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMzEzNDM2IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIvPjwvc3ZnPg==",
                    dataTitle: "Advanced" 
                },
            ]
        },
    time:{
            icon: "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzAuODIgMzUuMzMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE2LjI2IDE4Ljg2bDcuNDQtNy4zOCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMzEzNDM2IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIvPjxnIGZpbGw9IiMzMTM0MzYiPjxjaXJjbGUgY3g9IjIxLjMzIiBjeT0iOS4yNiIgcj0iLjciLz48Y2lyY2xlIGN4PSIxNS4yOSIgY3k9IjcuNyIgcj0iLjciLz48Y2lyY2xlIGN4PSI5LjA4IiBjeT0iOS4zNSIgcj0iLjciLz48Y2lyY2xlIGN4PSI0LjY5IiBjeT0iMTMuODMiIHI9Ii43Ii8+PGNpcmNsZSBjeD0iMi45NyIgY3k9IjE5Ljc4IiByPSIuNyIvPjxjaXJjbGUgY3g9IjQuNjkiIGN5PSIyNS43OCIgcj0iLjciLz48Y2lyY2xlIGN4PSI5LjIxIiBjeT0iMzAuMzkiIHI9Ii43Ii8+PGNpcmNsZSBjeD0iMTUuMiIgY3k9IjMyLjA4IiByPSIuNyIvPjxjaXJjbGUgY3g9IjIxLjI0IiBjeT0iMzAuMzkiIHI9Ii43Ii8+PGNpcmNsZSBjeD0iMjUuOCIgY3k9IjI1Ljc4IiByPSIuNyIvPjxjaXJjbGUgY3g9IjI3LjU4IiBjeT0iMTkuNzgiIHI9Ii43Ii8+PGNpcmNsZSBjeD0iMjUuOCIgY3k9IjEzLjgzIiByPSIuNyIvPjwvZz48Y2lyY2xlIGN4PSIxNS40MSIgY3k9IjE5LjkyIiBmaWxsPSJub25lIiByPSIxNC45MSIgc3Ryb2tlPSIjMzEzNDM2IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIvPjxjaXJjbGUgY3g9IjE1LjQxIiBjeT0iMTkuOTIiIGZpbGw9Im5vbmUiIHI9IjEuMzMiIHN0cm9rZT0iIzMxMzQzNiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiLz48cGF0aCBkPSJNMjAgLjVoLTkuNTFtMi42OCAwdjQuNDZNMTcuMzkuNXY0LjQ2TTMuOTggOS44MmwtMi42LTIuNjEgMi4yNS0yLjI1IDIuNiAyLjYxIiBmaWxsPSJub25lIiBzdHJva2U9IiMzMTM0MzYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIi8+PC9zdmc+",
            arrowIcon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAMAAABV0m3JAAAAD1BMVEVHcEwvNTUxNDYvNTUxNDaUZ5plAAAABHRSTlMAYO8wBHtyNQAAADdJREFUeNpty0EKAEAIQtEy73/mmUXwEXIR9sAadUVaU7I7zNY/ofuiGOWs9whDMdQYioViKPYAjDEBAxPx53oAAAAASUVORK5CYII=",
            title: "Time",
            data: [
                { icon: "", dataTitle: "0-30 mins" },
                { icon: "", dataTitle: "30-60 mins" },
                { icon: "", dataTitle: "60-90 mins" }
            ]
        },
    type: {
            icon: "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzQuMDYgMjIuNzUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTS4zNyAxMi43NUg2LjdsMi44NS03LjEyczAgMCAwIDBsMy41NiAxNi43MnMwIDAgMCAwbDUuODMtMjJzMCAwIDAgMGw0Ljc0IDE4LjM4czAgMCAwIDBsMy42OC04LjU0aDYuMjEiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iLjc1Ii8+PC9zdmc+",
            arrowIcon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAMAAABV0m3JAAAAD1BMVEVHcEwvNTUxNDYvNTUxNDaUZ5plAAAABHRSTlMAYO8wBHtyNQAAADdJREFUeNpty0EKAEAIQtEy73/mmUXwEXIR9sAadUVaU7I7zNY/ofuiGOWs9whDMdQYioViKPYAjDEBAxPx53oAAAAASUVORK5CYII=",
            title: "Type",
            data: [
                { 
                    icon: "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzQuMDYgMjIuNzUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTS4zNyAxMi43NUg2LjdsMi44NS03LjEyczAgMCAwIDBsMy41NiAxNi43MnMwIDAgMCAwbDUuODMtMjJzMCAwIDAgMGw0Ljc0IDE4LjM4czAgMCAwIDBsMy42OC04LjU0aDYuMjEiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iLjc1Ii8+PC9zdmc+",
                    dataTitle: "Dance"
                },
                { 
                    icon: "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzQuMDYgMjIuNzUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTS4zNyAxMi43NUg2LjdsMi44NS03LjEyczAgMCAwIDBsMy41NiAxNi43MnMwIDAgMCAwbDUuODMtMjJzMCAwIDAgMGw0Ljc0IDE4LjM4czAgMCAwIDBsMy42OC04LjU0aDYuMjEiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iLjc1Ii8+PC9zdmc+",
                    dataTitle: "Kids and family"
                },
                { 
                    icon: "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzQuMDYgMjIuNzUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTS4zNyAxMi43NUg2LjdsMi44NS03LjEyczAgMCAwIDBsMy41NiAxNi43MnMwIDAgMCAwbDUuODMtMjJzMCAwIDAgMGw0Ljc0IDE4LjM4czAgMCAwIDBsMy42OC04LjU0aDYuMjEiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iLjc1Ii8+PC9zdmc+",
                    dataTitle: "Low impact"
                },
                { 
                    icon: "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzQuMDYgMjIuNzUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTS4zNyAxMi43NUg2LjdsMi44NS03LjEyczAgMCAwIDBsMy41NiAxNi43MnMwIDAgMCAwbDUuODMtMjJzMCAwIDAgMGw0Ljc0IDE4LjM4czAgMCAwIDBsMy42OC04LjU0aDYuMjEiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iLjc1Ii8+PC9zdmc+",
                    dataTitle: "Muscle/ building"
                },
                { 
                    icon: "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzQuMDYgMjIuNzUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTS4zNyAxMi43NUg2LjdsMi44NS03LjEyczAgMCAwIDBsMy41NiAxNi43MnMwIDAgMCAwbDUuODMtMjJzMCAwIDAgMGw0Ljc0IDE4LjM4czAgMCAwIDBsMy42OC04LjU0aDYuMjEiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iLjc1Ii8+PC9zdmc+",
                    dataTitle: "Slim and ton"
                },
                { 
                    icon: "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzQuMDYgMjIuNzUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTS4zNyAxMi43NUg2LjdsMi44NS03LjEyczAgMCAwIDBsMy41NiAxNi43MnMwIDAgMCAwbDUuODMtMjJzMCAwIDAgMGw0Ljc0IDE4LjM4czAgMCAwIDBsMy42OC04LjU0aDYuMjEiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iLjc1Ii8+PC9zdmc+",
                    dataTitle: "Yoga"
                }
            ]
        },
    trainer: {
            icon: "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjYuMzQgMzEuOTkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMzEzNDM2IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjxwYXRoIGQ9Ik0yMy45OSAxMi41NmExMC43NCAxMC43NCAwIDEgMC0yMS40OCAwYzAgNS45MyA0LjgxIDEzIDEwLjc0IDEzczEwLjc0LTcuMDcgMTAuNzQtMTN6bS0zLjc0IDEwLjIyYzMuMjEgMiA1LjU1IDQuNzEgNS41NSA4LjcxTTUuODQgMjIuNzhDMi42MyAyNC43OC41IDI3LjQ5LjUgMzEuNDkiLz48cGF0aCBkPSJNMy45NyAxMC4zOGMwIDIuNjQgMy40MiA0Ljc4IDcuNjMgNC43OHM3LjYzLTIuMTQgNy42My00Ljc4bS0xNi4wNi0uMTFoMjAuNTgiLz48cGF0aCBkPSJNMTMuODMgMi4xOGExMC43MiAxMC43MiAwIDAgMSAzLjkzIDguMzFNMTIuNiAyLjE4YTEwLjM5IDEwLjM5IDAgMCAwLTQuMzUgOC4zMSIgc3Ryb2tlLXdpZHRoPSIuNSIvPjwvZz48cGF0aCBkPSJNMTEuNDQgMS44MUExLjgxIDEuODEgMCAwIDEgMTMuMjUgMGExLjgxIDEuODEgMCAwIDEgMS44MSAxLjgxIiBmaWxsPSIjMzEzNDM2Ii8+PC9zdmc+",
            arrowIcon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAMAAABV0m3JAAAAD1BMVEVHcEwvNTUxNDYvNTUxNDaUZ5plAAAABHRSTlMAYO8wBHtyNQAAADdJREFUeNpty0EKAEAIQtEy73/mmUXwEXIR9sAadUVaU7I7zNY/ofuiGOWs9whDMdQYioViKPYAjDEBAxPx53oAAAAASUVORK5CYII=",
            title: "Trainer",
            data: [
                { icon: "", dataTitle: "Tony Horton" },
                { icon: "", dataTitle: "Autumn Calabrese" },
                { icon: "", dataTitle: "Shaun T" },
                { icon: "", dataTitle: "Chalene Johnson" },
                { icon: "", dataTitle: "Leandro Carvalho" },
                { icon: "", dataTitle: "Jericho McMatthews" },
                { icon: "", dataTitle: "Sagi Kalev" }

            ]
        }
}
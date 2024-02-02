## gamePage
### root
<ul>
    <li>App</li>
        <ul>
        <li>h2: title</li>
        <li>div</li>
            <ul>
            <li>p: messageArea</li>
            </ul>
        <li>div: main content block</li>
            <ul>
            <li>div: boardContainer</li>
                <ul>
                <li>8x div: row</li>
                    <ul>
                    <li>8x canvas: cell </li>
                    </ul>
                </ul>
            <li>div: tableContainer</li>
                <ul>
                    <li>table</li>
                        <ul>
                            <li>thead</li>
                            <ul>
                            <li>tr</li>
                                <ul>
                                <li>td: blank</li>
                                <li>td: "White"</li>
                                <li>td: "Black"</li>
                                </ul>
                            </ul>
                        <li>tbody</li>
                            <ul>
                                <li>various trs</li>
                                <ul>
                                    <li>td: moves counting up from 1</li>
                                    <li>td: white move</li>
                                    <li>td: black move</li>
                                </ul>
                            </ul>
                        </ul>
                </ul>
            <li>div: buttons</li>
                <ul>
                <li>button: "Quit"</li>
                </ul>
        </ul>
</ul>

## loadPage
### root
<ul>
<li>App</li>
    <ul>
    <li>table</li>
        <ul>
        <li>thead</li>
            <ul>
            <li>tr</li>
                <ul>
                <li>td: blank square</li>
                <li>td: "Game #"</li>
                <li>td: "Save Name"</li>
                </ul>
            </ul>
        <li>tbody</li>
            <ul>
            <li>tr: various rows representing the saved games</li>
                <ul>
                <li>td: "Load" button</li>
                <li>td: gameId</li>
                <li>td: gameName</li>
                </ul>
            </ul>
        <li>tfoot:</li>
            <ul>
            <li>tr</li>
                <ul>
                <li>td: "Start New Game"</li>
                </ul>
            </ul>
            </ul>
    </ul>
</ul>


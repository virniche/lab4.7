# lab4.7

## Content: I need an about section including my role at MSU and my intentsion for future career. Then I need my CMSE and Film projects to implement into this page. My email for contact info. 

#projects .articles {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
}

#projects{
    display: grid;
    grid-template-columns: repeat(2,2fr);
    grid-template-rows: repeat(2, minmax(100px, auto));
    gap: 1em;
}

#projects h2{
    grid-column: span 2 / span 2;
}

#projects {
    display: grid;
    grid-template-columns: 1fr;
}

#projects > h2 {
    grid-column: 1 / -1;
}

#projects .articles {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--standard-gap);
}


@media (min-width: 600px) {
    #projects .articles {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
}

@media (min-width: 1000px) {
    #projects .articles {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
}

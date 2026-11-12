# Remove imports in CSS and add them into the <head> of my index.html like this
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Emilys+Candy&family=Henny+Penny&display=swap" rel="stylesheet">
# The import statements made the browser download the font sheets before opening the page and it took a lot longer

# Next I removed the import in my CSS for my colors since I already defined it in my :root

# Finally I changed all my image sizing and adding width, height, and fetchpriority (Google Gmeini helped with the fetchpriority add on) 
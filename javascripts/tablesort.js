document$.subscribe(function() {
  var tables = document.querySelectorAll("article table:not([class])")
  tables.forEach(function(table) {
    const headers = table.querySelectorAll("th")    
    headers.forEach(th => {
      // Default sort by status
      if (th.textContent.trim() === "Status") {
        th.setAttribute("data-sort-default", "");
      }
    });
    new Tablesort(table);
  });

});

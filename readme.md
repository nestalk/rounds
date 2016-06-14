Rounds
=======

Prototype web site for recording drinks purchased on a night out.


To run
------

To install modules and then serve the site, run the following commands


```
npm install
npm run serve
```

The site will then now be running on http://localhost:8080


Api required
------------

The site requires 4 api end points.

- a get endpoint for the list of bars
- a get endpoint for the list of products
- a get endpoint for the list of prices for the products at each bar
- a post endpoint to send the bar id and list of products ordered, which will return the round and ordered_beverages objects that were saved in the database.




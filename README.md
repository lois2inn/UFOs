# UFOs

## Overview of Project
A data journalist is given an opportunity to write about her hometown: McMinnville, OR. Apart from revisiting memories and people back home, she is excited to record the sightings of UFOs in her hometown and post them online. The project aims to provide interactive visualizations depicting in-depth analysis of UFO sightings using front end technologies like JavaScript, HTML and CSS. Below is the breakdown of tasks achieved in this project: 

- Build a table using data stored in a JavaScript array.
- Create filters to make this table fully dynamic.
- Place the table into an HTML file for easy viewing.
- Customize the webpage using Bootstrap.
- Equip the table with several fully functional filters that will allow users to interact with the visualizations.
  - Allow users to filter data using date.
  - Facilitate users to filter by city, state, country and shape.

## Results

- Describe how someone might use the new webpage by walking through the process of using the search criteria. 
- Use images of your webpage during the filtering process to support your explanation.

## Summary

### A drawback of this new design
112 entries in dataset.
 Correct format key in date in the needed format. Key in state, country and shape. city - case sensitive

### Recommendations for further development

The webpage developed for the project is pretty basic. Several enhancements can be done with respect to datasets and appearance of the web page.
- Clean up and enhance the dataset.
  - All entries in the dataset can be changed to similar format in each field. Some examples include replacing abbreviations of countries and states with  actual names; refining the Duration entry to a single measurement of time (seconds or minutes), paying attention to letter cases in entries, etc.
  - The userbase of the aplication can be broadened by adding in more sightings from other countries. If the data gets larger, webpage may slow down everytime a filter is changed, there is a need to use database. Flask-Python-MongoDb
- The look and feel of the web page can be improved as specified below:
  - More CSS and Bootstrap classes can be added (like borders to Filter Search section and table section. Add a band between text and filter)
  - Pick lists for countries and shape, date picker, 
  - Reset button can be added to reset search criteria. 
  - Upon filtering the criteria, the count of filtered records can be displayed above/below the dynamic table. Pagination can be implemented for large datasets.
  - The input in textboxes can be sanitized to prevent Cross site scripting and SQL injection vulnerabilities.

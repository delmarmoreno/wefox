# Notes for Exploratory Testing PHPTravels.com
PHPTravels.com offers now hotel booking functionality. This functionality can be accessed from top main navigation menu. The site seems to be responsive by page-width. 


# Hotels Page

The Hotels page consists of two main sections to access its functionality:

 1. Booking Tool
 2. Featured Hotels


## 1 . Booking Tool

This tools consists of 4 inputs and a submit button. 

 1. City Name:
This field requires a minimum of three characters to show results. The searching functionality works by typing the name of a city and it will search for possible matches globally. This will allow the user faster accessibility.
 2. Check-in Date: 
 This opens a calendar widget. A date can not be written in.
 3. Check-out Date:
 This opens a calendar widget. A date can not be written in. Previous days cannot be selected. Some previous days will show up gray or blue. 
4. Travellers:
This opens a widget with the options to establish number of rooms, number of adults, number of children, and nationality. 
You can increase or decrease any of the first three options by using the +/- buttons. It is possible to set all of these to zero; but it won't produce any results. 
For nationality, we have a dropdown which is possible to leave empty with the "Select" option.
5. Submit Button
The submit button will not work if a city has not been inserted.  

After we have selected all the required information for a successful search, we are transitioned to a result list page. This page will contain all possible matches with our submitted information. The options contain an image of the hotel, the price, the location, the stars qualification, the reviews qualification and a "Details" button. 
After we click in any of the results, we are transitioned to the page of that hotel. 

## Hotel Page
We should be able to see the name of the hotel on the top-left section of the hotel with its stars rank next to it. Another qualification section on the top-right side. Below the hotel's name, we should see the location and the chain of the hotel - if any. 
This page will contain pictures of the hotel facilities on the top section. A short description of the hotel below it and the available rooms section.
### Available Rooms
This section contains a list of the possible rooms within the hotel ready to be booked. This list will contain pictures of the room, amenities, guest capacity, price with a dropdown option, and a Book Now button. 
### Hotel Amenities
The next section on the page contains all the hotel amenities. 
### Policy
The next section contains the hotel policies. 
### Payment Options
The next section contains all the payment options this hotel has.
### Hotel Map
The last section of the page is a maps widget with the location and address of the hotel.

## Payment Page
After we have selected the hotel room details, we will be transitioned to the payment page. 

#PHPTravels.com
PHPTravels.com offers now hotel booking functionality. This functionality can be accessed from top main navigation menu. 
Based on the notes in our documentation, we will try 3 scenarios to test the functionality. 
```mermaid
graph LR
A[PHPTravels] --> B(Hotels)
B --> C(Booking Tool) -->E((Data)) -->F(Hotel Options)-->G(Hotel Page)
B --> D(Featured Hotels)-->G(Hotel Page)
G -->H(Payment Page)
```

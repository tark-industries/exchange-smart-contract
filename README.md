####System parts
* User A
* User B
* Contract C

####Logic
* A --> C "I want to buy $1 from B for 0.01 ETH"
* C --> A "Ok wait a sec"
* C --> B "A wants to buy $1 for 0.01 ETH"
* B --> C "Ok"
* C --> A "B agreed, give me 0.01 ETH and let me know when B will send you money"
* A --> C "0.01 ETH"
* C --> B "I am holding 0.01 ETH from A, send him $1"
* B --> A "$1" via bank
* A --> C "Received $1 from B"
* C --> B "0.01 ETH"
* If A don't received $1 in 24 hours, C makes refund


#### Client (web / mobile)
* Login into system with Google (Firebase)
* See other users
* Click on user A
* Open details with three buttons
* * Buy $1 from A for 0.01 ETH
* * Sell $1 to B for 0.01 ETH
* * Cancel (back to previous screen)
* On press any button logic procedure start


#### Requirements
##### General
* Web / Mobile application
* Users (sellers) database (in firebase)


##### Backend
* Authorization (Google / Firebase) - Abstract


##### Frontend
* Authorization

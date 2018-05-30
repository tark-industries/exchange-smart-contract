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



#### Cases

This section describes the four exact workflow scheme

Alice wants to buy N ether from Bob, both sides have intention for successful trade.
1.1) Alice asks Bob for N amount of ether for M fiatRate 
1.2) Alice creates order through smart-contract metioning sellerAddress, amount and its fiatRate
1.3) Bob accept the trade sending ether to escrow's address and call params
1.4) Alice sends payment to Bob's bank details
1.5) Bob confirms the trade, escrow release funds to Alice

Alice wants to buy N ether from Bob and fool him
2.1) Alice asks Bob for N amount of ether for M fiatRate
2.2) Alice creates order through smart-contract metioning sellerAddress, amount and its fiatRate
2.3) Bob accept the trade sending ether to escrow's address and call params
2.4) Alice claims that she have sent the payment, although she havent.
2.5) Bob reject the payment
2.6) Escrow timed out, money is hold in the escrow. Two parties have to contact the admins  

Alice wants to buy N ether but Bob wants fool her
3.1) Alice asks Bob for N amount of ether for M fiatRate
3.2) Alice creates order through smart-contract metioning sellerAddress, amount and its fiatRate
3.3) Bob accept the trade sending ether to escrow's address and call params
3.4) Alice have sent the payment, but Bob refuse it.
3.5) 

Alice wants to buy N ether from Bob, but bank payment is slow
3.1) Alice asks Bob for N amount of ether for M fiatRate
3.2) Alice creates order through smart-contract metioning sellerAddress, amount and its fiatRate
3.3) Bob accept the trade sending ether to escrow's address and call params
3.4) Alice have sent the payment, but the bank is slow.
3.5) One of the parties increase timeout of escrow until payment is confirmed
3.6) Bob accepts the payment
3.7) Escrow release funds to Alice

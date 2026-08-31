# Python - Intervals Based Problem - Max Heap ✅

**Author:** itsarvindhere
**Votes:** 17
**Link:** [https://leetcode.com/problems/exam-room/solutions/4196521/](https://leetcode.com/problems/exam-room/solutions/4196521/)

---

I was not able to come up with an optimal solution myself. I had to look at the discussion section but I hardly found any solution that had a good explanation for the Max Heap approach.

So, after spending almost 2 hours understanding the approach, I will try my best to explain what is going on here.

See, first, we need to understand some things before we move on to Max Heap approach.

Let's take an example.

	Suppose, we have 10 seats.
	
	Now, if a person comes, he should sit at seat "0" since no seat is occupied.
	
	Another person comes. He should sit at seat "9" that is the last seat.
	
	Now, we have this interval [0,9] where "0" and "9" have person sitting
	And between these two, all the seats are available
	
	So, next time a person comes, we can avoid manually checking each seat to see which is optimal one.
	
	When seats "0" and "9" are occupied, there are two seats that have same maximum closest distance
	Those are seats "4" and "5".
	
	For seat "4", the closest occupied seat is seat "0" and so distance is "4"
	Similarly For seat "5", the closest occupied seat is seat "9" and so distance is "4"
	
	But, as the problem statement says, we have to choose the seat that has a smaller number.
	So here, the person should sit at seat "4".
	
	Now, you can quickly get this optimal seat for any interval by just doing floor of (left+right) / 2
	
	Here, floor of (0 + 9)/2  => floor of 4.5 => 4 => MOST OPTIMAL SEAT for interval [0,9]
	
So, quickly finding the most optimal seat is one thing we need to figure out.

	Now that a person sits at seat "4" it means, the interval [0,9] is no longer valid
	Because remember, an interval [left,right] means all seats between left and right are empty.
	
	So, now that seat "4" is occupied, this means we now have two new intervals.
	
	[0,4] and [4,9]
	
	Makes sense, right?
	
	Now, the next time a person comes, we have to choose the most optimal seat from these two intervals.
	
	For interval [0,4], the most optimal seat is floor of (0 + 4) / 2 => seat 2
	And for interval [4,9] the most optimal seat is floor of (4 + 9) / 2 => seat 6
	
	Now the thing is, for both the seats, the closest distance is the same.
	
	For seat "2" closest occupied seat is "0" so distance => 2
	For seat "6" closest occupied seat is "4" so distance => 2
	
	But again, we have to choose the lower seat number.
	
	Now that seat "2" is occupied as well, it means interval [0,4] is no longer valid
	And now, two new intervals are there
	
	[0,2] and [2,4]
	
	The issue now is, for large test cases, at any time, there can be a lot of intervals
	So, we cannot just go over every single interval, 
	get the most optimal seat, get the closest distance and so on
	
	We somehow need a way such that at any time, we can pick that one interval 
	for which the closest distance is maximum. And even if multiple intervals have same distance
	the interval that appears first is chosen.
	
And that's where a Max Heap comes into the picture.
	
We can put our intervals in a Max heap which will order them based on the distance between most optimal seat and the seat closest to that most optimal seat. 

	For any interval we choose, we can not only find the most optimal seat but we can quickly find the closest distance as well.
	
	For example, if we have interval [0,4]
	
	the most optimal seat is floor of (0 + 4) / 2 => floor of (2) => 2
	
	And the closest distance is between "2" and "0" => 2
	
	This can be calculated as floor of (4 - 0) / 2 => floor of 2 => 2
	
And well, that's all we need to know before we start writing the code.

Note that there will be some edge cases while calculating the most optimal seat and closest distance.

	For example,
	
	Initially when no seat is occupied, the whole row from 0 to 9 is available
	
	It means, the interval is [-1,10]
	
	So, here, as per our formula, most optimal seat is floor of (-1 + 10) / 2 => floor of (9/2) => floor of 4.5 => 4
	
	But that's wrong. Since all sets are empty, the most optimal is seat "0".
	
	And similarly, the formula for closest distance is floor of (10 - (-1)) / 2 -> floor of 11/2 => 5
	But, the closest distance is actually "0" because there is no seat occupied yet apart from seat "0"
	So there is no distance value yet.
	
	So, that's one edge case.

	Now, suppose person sits at seat "0".
	
	Now, there will again be two new intervals [-1,0] and [0,10]
	
	For interval [-1,0] the closest distance is "0" because "left" is -1
	
	In fact, for any interval that starts with -1, the closest distance will be "right" value
	For example if we have [-1,5] or [-1,4] and so on...
	
	Because it makes sense right? If we have [-1,5] then the most optimal seat is "0" (since left is -1)
	and it will have closest occupied seat at number "5". So distance will be "5 - 0" => 5
	
	Similarly, for interval [0,10] most optimal seat as per our formula is floor of (0 + 10) / 2 => 5
	
	But, "10" here is the number of seats available. It means, "10" is not even a valid seat number.
	It just means that right now, we just have a person sitting at seat "left" which here is seat "0".
	
	So, in this case, the most optimal seat is at "9". 
	
	And that's another edge case to take care of.

	And similarly, when we calculate the closest distance in this case, we don't do floor of (10 - 0) / 2
	
	As that will again give is 5. 

	Rather, since the most optimal seat is "9", the closest distance will be "9 - 0" => 9 (Or 10 - 0 - 1)
	
	So, for any interval that has "right" value as "n" or the number of seats,
	The most optimal seat is "n - 1"
	and the closest distance is "n - 1 - left"

So far, I have talked about the scenario when a person sits at a seat.

What about leaving?

	Suppose, we have three people sitting. So, "0", "4" and "9" are occupied.

	Now, person "4" leaves.

	It means that now, the intervals [0,4] and [4,9] are no longer valid because "4" is now empty.
	
	So, we have to remove these intervals from our Max Heap, that is, 
	remove the interval starting with "4" and the one ending with "4"
	
	And once we do that, it now means the interval [0,9] is again a valid interval so we should push it back in the max heap.
	
	And again, we have to calculate the closest distance by the same logic.
	
And well, that's the whole approach explained.

I hope I was able to explain the Max Heap solution in detail. Still, if you have any doubts, please comment below. I will try to answer if I can.

```
class ExamRoom:  

    def __init__(self, n: int):
        # Number of seats
        self.n = n
        
        # Max Heap
        self.maxHeap = []        

    def seat(self) -> int:
        
        # If heap is empty, then the whole row of seats is an available interval to us
        if not self.maxHeap:
            # left and right boundaries of this interval
            left,right = -1, self.n
        
        # Otherwise, we take the interval with the maximum distance between left and right boundaries
        # Note that here, boundaries simply mean at "left" and "right" indices, seats are occupied
        # And between these indices, there are available seats
        else:
            top = heappop(self.maxHeap)
            left,right = top[1], top[2]
            
            
        # Now that we have "left" and "right", let's decide at what seat person will sit
        
        # If all seats are empty, sit at the seat 0
        if left == -1: seat = 0
            
        # If a person is sitting at "left" index but there is no occupied seat on "right", 
        # Sit at right most seat, that is, n - 1
        elif right == self.n: seat = self.n - 1
            
        # If seat "left" and "right" are occupied
        # Sit at "floor of (left + right / 2)" seat
        else: seat = (left + right) // 2
            
        # Now that we know at what "seat" person will sit, two new intervals will be created
        # First is from "left" to "seat" and the other is from "seat" to "right"
        # So we push these two intervals to the Max Heap 
        # The deciding value based on which these intervals will be ordered is closest distance
        # So, for interval [left,seat] this distance is floor(seat - left / 2)
        # For the interval [seat,right] this distance is floor(right - seat / 2)
        
        # Closest Distance for the Left Interval => [left,seat]
        closestDistanceForLeftInterval = (seat - left) // 2
        
        # If "left" is -1 then the most optimal seat is seat "0"
		# And since interval is [left,seat] the closest distance will be "seat" only
        if left == -1: closestDistanceForLeftInterval = seat
        
        # Closest Distance for the Right Interval => [seat,right]
        closestDistanceForRightInterval = (right - seat) // 2
        
        # If "right" is "n" then the interval is [seat, n]
        # So, for this interval, the most optimal seat is the seat n - 1
        # So, the distance from most optimal seat to the "seat" will be "self.n - 1 - seat"
        if right == self.n: closestDistanceForRightInterval = self.n - 1 - seat

        # Push these two intervals in the maxHeap
        heappush(self.maxHeap, [-closestDistanceForLeftInterval, left, seat])
        heappush(self.maxHeap, [-closestDistanceForRightInterval, seat, right])
        
        # Return the seat number at which student will sit
        return seat
        

    def leave(self, p: int) -> None:
        
        # Now, just imagine what happens when a person leaves a seat
        # For example, if at any point, we have three person sitting in a row of 10 seats
        # Then seats "0", "4" and "9" will be occupied
        # And if person "4" leaves, it means, 
		# we should now remove the intervals from maxHeap which either start with "4" or end with "4"
        # Because those intervals are no longer valid now that the seat "4" itself is empty
        
        intervalStartsAtP = None
        intervalEndsAtP = None
        
        # Let's just loop over the maxHeap since it is just a list internally
        for interval in self.maxHeap:
            # If this interval starts with "p"
            # This should be removed
            if interval[1] == p: intervalStartsAtP = interval
            
            # If this interval ends with "p"
            # This should be removed
            if interval[2] == p: intervalEndsAtP = interval
                
        # Remove the two
        self.maxHeap.remove(intervalStartsAtP)
        self.maxHeap.remove(intervalEndsAtP)
                
        # And now, the order is not proper so we have to manually call heapify here
        heapify(self.maxHeap)
        
        # Finally, since we remove the two intervals, it means a bigger interval is now available to us
        # Imagine that the two intervals we removed are [left, p] and [p, right]
        # So, it means [left,right] is now a new larger interval available to us, right?
        # So, put it in the heap
        left = intervalEndsAtP[1]
        right = intervalStartsAtP[2]
        
        # The same logic to get the closest distance as in seat() method
        closestDistance = (right - left) // 2
        
        # If "left" is -1 then the most optimal option is seat "0"
        # It means, if next person sits at seat "0", the closest seat will be at "right"
        # So closest distance here is "right"
        if left == -1: closestDistance = right
            
        # If "right" is "n" then the interval is [left, n]
        # So, for this interval, the most optimal seat is the seat n - 1
        # So, the distance from most optimal seat to the "left" will be "self.n - 1 - left"
        elif right == self.n: closestDistance = self.n - 1 - left
        
        # Push this interval in the maxHeap with its closest distance value
        heappush(self.maxHeap, [-closestDistance, left, right])
```
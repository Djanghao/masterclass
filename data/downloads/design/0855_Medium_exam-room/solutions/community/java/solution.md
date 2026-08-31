# Easy to Understand Java Solution with Explanation - TreeSet

**Author:** rahul-raj
**Votes:** 35
**Link:** [https://leetcode.com/problems/exam-room/solutions/1331530/](https://leetcode.com/problems/exam-room/solutions/1331530/)

---

What we really need in discussion section is  a readable solution with detailed comments possible to make it look easier to understand, rather than just talking about the same constraints already mentioned in the question!  It is important to discuss the optimized solution, but it is also important to come up with a viable solution that can be formed within 20-25 minutes in the actual interview.

```

class ExamRoom {

    int capacity; // this is just to keep track of the max allowed size
    TreeSet<Integer> seats; 
	/* why treeset, because seats will be sorted automatically 
	   and get first()/last() element in log(n) time. 
	*/
    
    public ExamRoom(int n) {
        this.capacity=n;
        this.seats = new TreeSet<>();
    }
    
    public int seat() {
        int seatNumber=0;
		/*
		  Return 0 for first attempt ( as mentioned in question)
		  Otherwise, we need to calculate the max distance by checking the whole treeset : O(n) time. 
		  Note that "distance" variable is initialized to first appearing seat,
		  why because the distance calculation is based on current seat and the seat before that. 
		  Find the maximum distance and update the seat number accordingly.
		  distance calculation -> (current seat - previous seat )/ 2
		  Update the max distance at each step.
		  New seat number will be ->  previous seat number + max distance 
		  
		  Now, before returning the end result,  check for one more edge case:
		  That is, if the max distance calculated is less than ->  capacity-1-seats.last()
		  
		  Why because -> if last seat number in treeset is far from last position, 
		  then  the largest distance possible is the last position.
		  
		*/
        if(seats.size() > 0){
            Integer prev=null;
            int distance = seats.first();
            for(Integer seat : seats){
                if(prev != null){
                    int d = (seat-prev)/2;
                    if(distance < d){
                        distance=d;
                        seatNumber=prev+distance;
                    }
                }
                prev = seat;
            }
            
            if(distance < capacity-1-seats.last()){
                seatNumber = capacity-1;
            }
        }
        seats.add(seatNumber);
        return seatNumber;
    }
    
    public void leave(int p) {
        seats.remove(p); 
		/* simply remove the seat number from treeset
		 and treeset will be automatically adjust its order in log(n) time. 
		*/
    }
}



```
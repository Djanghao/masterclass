# Python/ JS/ Go/C++ O(n) by Unit step [w/ Hint]

**Author:** brianchiang_tw
**Votes:** 2
**Link:** [https://leetcode.com/problems/car-pooling/solutions/1663953/](https://leetcode.com/problems/car-pooling/solutions/1663953/)

---

**Hint** & **Abstract model transform** via signal processing:

each **trip[ i ]** with **passenger_i, getOn_i, getOff_i**

<=> each **rectangle impulse** (or **rectangle signal**) from **[getOn_i , getOff_i ]**, with **implise amplitude = passenger_i**

<=> **rectangle impulse** can be built with **unit-step function** 
(i.e., **u(t)** also known as heaviside function in Fourier transform, or Signal-and-System analysis in engineering/control domain)

<=> **update each trip** as **updating implise amplitude of unit step function**

---

On last stage, we can **get car loading** by **adding passeneger getOn/getOff information**.

If car loading larger than capacity somewhere, then return false on Rejection.

Otherwise, return true on Acception.

---

**Implementation**

in **Python**

```
class Solution:
    def carPooling(self, trips: List[List[int]], capacity: int) -> bool:
        
        # given by desciprtion
        TRIP_LENGTH = 1000
        
        passenger_change = [ 0 for _ in range(TRIP_LENGTH+1)]
        
        # Update passenger change for each trip
        for passenger, get_on, get_off in trips:
            
            passenger_change[get_on] += passenger
            passenger_change[get_off] -= passenger
            
        
        car_loading = 0
        
        # Count total passenger for each bus top
        for i in range( len(passenger_change) ):
            
            car_loading += passenger_change[i]
            
            # Reject when the car is overloaded somewhere
            if car_loading > capacity:
                return False
                
        # Accept only if all trip is safe
        return True
```

---

in **Javascript**

<details>
	<summary>Expand to see source code</summary>

```
var carPooling = function(trips, capacity) {
	  
	// given by desciprtion
    TRIP_LENGTH = 1000
    let passengerChange = Array(TRIP_LENGTH+1).fill( 0 );
    
	// Update passenger change for each trip
    for( const [passenger, getOn, getOff] of trips){
        
        passengerChange[getOn] += passenger;
        passengerChange[getOff] -= passenger;
    }
    
    let carLoading = 0;
    
	// Count total passenger for each bus top
    for( let i = 0 ; i < passengerChange.length ; i++ ){
        
        carLoading += passengerChange[i];    
		
		// Reject when the car is overloaded somewhere
        if( carLoading > capacity ){
            return false;
        } 
    }
    
	// Accept only if all trip is safe
    return true;
};
```

</details>

---

in **Go**

<details>
	<summary>Expand to see source code</summary>

```
func carPooling(trips [][]int, capacity int) bool {
    
    // given by description
    TRIP_LENGTH := 1000
    
    passengerChange := make( []int, TRIP_LENGTH+1)
    
    // Update passenger change for each trip
    for _, tripTuple := range trips{
        
        passenger := tripTuple[0]
        getOn := tripTuple[1]
        getOff := tripTuple[2]
        
        passengerChange[getOn] += passenger
        passengerChange[getOff] -= passenger
    }
    
    // Count total passenger for each bus top
    carLoading := 0
    for i := 0 ; i < len(passengerChange) ; i++ {
        
        carLoading += passengerChange[i]
        
        // Reject when the car is overloaded somewhere
        if carLoading > capacity{
            return false
        }
    }
    
    // Accept only if all trip is safe
    return true
}
```

</details>

---

in **C++**

<details>
	<summary>Expand to see source code</summary>

```
class Solution {
public:
    bool carPooling(vector<vector<int>>& trips, int capacity) {
        
        // given by description
        const size_t TRIP_LENGTH = 1000;
        vector<int> passengerChange = vector<int>(TRIP_LENGTH+1, 0);
        
        // Update passenger change for each trip
        for(auto trip : trips){
            int passenger =  trip[0], getOn = trip[1], getOff = trip[2];
            
            passengerChange[ getOn ] += passenger;
            passengerChange[ getOff ] -= passenger;
            
        }
        
        // Count total passenger for each bus top
        int carLoading = 0;
        
        for( size_t i = 0 ; i < passengerChange.size() ; i ++ ){
            
            carLoading += passengerChange[ i ];
            
            // Reject when the car is overloaded somewhere
            if( carLoading > capacity ){
                return false;
            }
        }
        
        // Accept only if all trip is safe
        return true;
    }
};
```

</details>

---

Related leetcode challenge:

Highly recommened practing this one, in order to strengthen the unit-step framework we built here.

[Leetcode #1109 Corporate Flight Bookings](https://leetcode.com/problems/corporate-flight-bookings/)

---

Reference:

[1] [Mathworld: Unit step function and Heaviside step function](https://mathworld.wolfram.com/HeavisideStepFunction.html)

[2] [Rectangle signal, built with unit step function](https://www.intmath.com/laplace-transformation/1a-unit-step-functions-definition.php)
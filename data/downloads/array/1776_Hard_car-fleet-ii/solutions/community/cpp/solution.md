# Car Fleet-II | Beats 94.59% Time-wise and 79% Memory-wise | Hindi-based Explanation

**Author:** AliNasar
**Votes:** 4
**Link:** [https://leetcode.com/problems/car-fleet-ii/solutions/5227113/](https://leetcode.com/problems/car-fleet-ii/solutions/5227113/)

---

Iss article mein hum ek efficient method explore karenge jisse cars ke collision times calculate kiye jaa sakte hain, jab unki positions aur speeds di hui ho. Hum approach ke piche ki intuition discuss karenge, algorithm ka detailed explanation denge, uski complexity analyze karenge, aur solution ko examples aur edge cases ke sath demonstrate karenge. 
*Aakhir mein, hum code ko line by line explain karenge taaki poori understanding mil sake.*

# Intuition
*Jab cars ke collision times calculate karne ki problem solve karte hain, to main insight yeh hai ki relative speeds aur positions ko consider karna zaroori hai. Ek car tabhi doosri car se collide kar sakti hai agar uske aage wali car slow ho. Stack ka use karte hue potential collision candidates ko track karna allows karta hai ki efficiently collision times compute kiye jaa sakein.*

# Approach
1. **Stack ka Use**: Stack ko use karke cars ke indices store karna jo current car se potentially collide kar sakti hain. Yeh efficiently determine karne mein madad karta hai ki next car kaun si hai jisse collision ho sakta hai.
2. **End se Iterate Karna**: Last car se first car tak iterate karna. Yeh humein har car ko uske aage wali cars ke context mein consider karne mein madad karta hai.
3. **Collision Time Calculate Karna**: Har car ke liye, stack se cars ko pop karna jab tak aapko ek slow car na mil jaye. Collision time calculate karna aur answer ko update karna agar valid ho.
4. **Stack Update Karna**: Current car index ko stack mein push karna future collision calculations ke liye.

# Edge Cases

1. **Sabhi Cars ki Speed Same Hai**:
   - **Input**: `[[1, 2], [2, 2], [3, 2]]`
   - **Output**: `[-1.0, -1.0, -1.0]`
   - **Explanation**: *Koi bhi car kabhi collide nahi karegi kyunki sabki speed same hai.*

2. **Sirf Ek Car Hai**:
   - **Input**: `[[1, 2]]`
   - **Output**: `[-1.0]`
   - **Explanation**: *Koi collision nahi hai kyunki sirf ek car hai.*

3. **Speeds Ghatte Jaa Rahi Hain**:
   - **Input**: `[[1, 3], [2, 2], [3, 1]]`
   - **Output**: `[-1.0, -1.0, -1.0]`
   - **Explanation**: *Koi collision nahi hai kyunki har car pehli car se slow hai.*
   
# Complexity

- **Time Complexity**: Time complexity \\(O(n)\\) hai, jahan \\(n\\) cars ka number hai. Har car stack mein maximum ek baar push aur pop hoti hai.
- **Space Complexity**: Space complexity \\(O(n)\\) hai stack ke liye jo car indices store karta hai.

# Code
*Yeh hai complete code detailed explanations ke sath:*

```cpp
class Solution {
public:
    vector<double> getCollisionTimes(vector<vector<int>>& cars) {
        vector<double> answer(cars.size(), -1);  // Collision times ko -1 se initialize karna, iska matlab hai koi collision nahi
        stack<int> st;  // Stack jo cars ke indices ko hold karta hai
        
        // Last car se first car tak iterate karna
        for(int i = cars.size() - 1; i >= 0; --i) {
            // Stack se cars ko remove karna jo slow hain ya same speed wali hain current car se
            while(!st.empty() && cars[st.top()][1] >= cars[i][1]) {
                st.pop();
            }
            
            // Car ke aage wali car ke sath collision time calculate karna
            while(!st.empty()) {
                // Stack ke top par car ke sath potential collision time calculate karna
                double collTime = (double)(cars[st.top()][0] - cars[i][0]) / (cars[i][1] - cars[st.top()][1]);
                
                // Check karna ki collision time valid hai ya nahi
                if(answer[st.top()] == -1 || collTime <= answer[st.top()]) {
                    answer[i] = collTime;  // Current car ke liye collision time update karna
                    break;  // Loop se exit karna kyunki humein valid collision time mil gaya
                }
                st.pop();  // Car ko stack se remove karna agar valid collision nahi hai
            }
            
            st.push(i);  // Current car index ko stack mein push karna
        }
        
        return answer;  // Collision times ka array return karna
    }
};
```

### Code ka Detailed Explanation

1. **Initialization**:
   - `vector<double> answer(cars.size(), -1)`: Ek vector initialize karna jo collision times store karega, sabhi values initially -1 set hain, jo indicate karta hai ki koi collision nahi hai.
   - `stack<int> st`: Ek stack initialize karna jo cars ke indices store karega.

2. **Main Loop**:
   - `for(int i = cars.size() - 1; i >= 0; --i)`: Last car se first car tak iterate karna. Yeh humein har car ko uske aage wali cars ke context mein consider karne mein madad karta hai.

3. **Remove Slower Cars**:
   - `while(!st.empty() && cars[st.top()][1] >= cars[i][1])`: Stack se cars ko remove karna jo slow hain ya same speed wali hain current car se, kyunki woh current car se collide nahi kar sakti.
     - `st.pop()`: Slow ya same-speed car ko stack se pop karna.

4. **Calculate Collision Time**:
   - `while(!st.empty())`: Stack ko loop through karna taaki valid collision mil sake.
     - `double collTime = (double)(cars[st.top()][0] - cars[i][0]) / (cars[i][1] - cars[st.top()][1])`: Stack ke top par car ke sath potential collision time calculate karna.
     - `if(answer[st.top()] == -1 || collTime <= answer[st.top()])`: Check karna ki collision time valid hai:
       - `answer[st.top()] == -1`: Car ke top par pehle koi collision time record nahi hai.
       - `collTime <= answer[st.top()]`: Collision existing collision time se pehle hoti hai.
       - `answer[i] = collTime`: Current car ke liye collision time update karna.
       - `break`: Loop se exit karna kyunki humein valid collision time mil gaya.
     - `st.pop()`: Agar collision time valid nahi hai, to car ko stack se remove karna.

5. **Update Stack**:
   - `st.push(i)`: Current car index ko stack mein push karna future collision calculations ke liye.

### Examples aur Dry Runs

#### Example 1
**Input**: `cars = [[1, 2], [2, 1], [4, 3], [7, 2]]`
**Output**: `[1.00000, -1.00000, 3.00000, -1.00000]`

**Explanation**:
- Car 0 Car 1 se 1 time par collide karegi.
- Car 1 kisi bhi car se collide nahi karegi.
- Car 2 Car 3 se 3 time par collide karegi.
- Car 3 kisi bhi car se collide nahi karegi.

**Dry Run**:
- End se start, car 3. Stack empty hai.
- Car 3 ko stack mein push karo.
- Car 2: stack mein car 3 hai. Car 2 fast hai, collision time calculate karo \\( (7 - 4) / (3 - 2) = 3 \\). Answer[2] = 3.0 update karo. Car 2 ko stack mein push karo.
- Car 1: stack mein car 2 hai. Car 1 slow hai car 2 se. Car 2 ko pop karo. Stack mein ab car 3 hai. Car 1 slow hai, car 3 ko pop karo. Stack empty hai, car 1 ko push karo.
- Car 0: stack mein car 1 hai. Car 0 fast hai, collision time calculate karo \\( (2 - 1) / (2 - 1) = 1 \\). Answer[0] = 1.0 update karo. Car 0 ko stack mein push karo.

#### Example 2
**Input**: `cars = [[3, 4], [5, 4], [6, 3], [9, 2]]`
**Output**: `[-1.00000, -1.00000, 1.50000, -1.00000]`

**Explanation**:
- Car 0 aur Car 1 same speed wali hain aur kabhi collide nahi hongi.
- Car 2 Car 3 se 1.5 time par collide karegi.
- Car 3 kisi bhi car se collide nahi karegi.

**Dry Run**:
- End se start, car 3. Stack empty hai.
- Car 3 ko stack mein push karo.
- Car 2: stack mein car 3 hai. Car 2 fast hai, collision time calculate karo \\( (9 - 6) / (3 - 2) = 3 \\). Answer[2] = 3.0 update karo. Car 2 ko stack mein push karo.
- Car 1: stack mein car 2 hai. Car 1 fast hai, collision time calculate karo \\( (6 - 5) / (4 - 3) = 1 \\). Answer[1] = 1.0 update karo. Car 1 ko stack mein push karo.
- Car 0: stack mein car 1 hai. Car 0 ki speed car 1 ke barabar hai, car 1 ko pop karo. Stack empty hai, car 0 ko push karo.




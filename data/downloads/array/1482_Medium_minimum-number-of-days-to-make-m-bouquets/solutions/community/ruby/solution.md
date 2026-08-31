# ✅Detailed Explanation || Intuition || Java, Python, Ruby, Javascript Solution || Binary search

**Author:** chintamanipala
**Votes:** 3
**Link:** [https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets/solutions/4515341/](https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets/solutions/4515341/)

---

# Intuition
let's assume i have 5 flower but i want to make 3 bouquet ans each bouquet must contain 2 flower that means i want 3*2 flower which is 6 ,  but i have only 5 flower that means it is not possible thats why i am returning -1 as my answer.
```
    int n=bloomDay.length;
    if((m * k) > n){
        return -1;
    }
```

if i observe the example 1 
 Input: bloomDay = [7,7,7,7,13,11,12,7], m = 2, k = 3
$$Day 1$$ : Here if i take the day 1 then no flower is bloomed so , i can't make any bouquet in the first day.
$$Day 2$$ : In the day 2 also i can't take any flower.

so, here we can observer that until the day 7 i can't take any flower.

$$Day 7$$ : In the day 7 the **index - 0,1,2,3,7** are bloomed now i can take 3 adjecent flower to make 1 bouquet. Here in the day 7 i only able to make 1 bouquet.

$$Day 8$$ : In day 8 i can't make more than 1 bouquet.

$$Day 9$$ : can't make more than 1 bouquet.


$$Day 10$$ : can't make more than 1 bouquet.


$$Day 11$$ : In the day 11 the **index - 0,1,2,3,5,7** are bloomed now i can take 3 adjecent flower to make 1 bouquet. Here in the day 11, i only able to make 1 bouquet. here i can't take 3,5,7 index to make another bouquet because those are not adjecent flower.

$$Day 12$$ : In the day 12 the **index - 0,1,2,3,5,6,7** are bloomed now i can take 3 adjecent flower to make 1 bouquet. Here in the day 11, i can able to make 2 bouquet. in bouquet 1 : the index 0,1,2 or 1,2,3 ans in bouquet 2 : the index 5,6,7 .

so i can make m bouquet in the day 12.

but what should be my maximum day i can choose to make the bouquet that is maximum value in the array that is 13.




# Approach
First i'll make a function which will take the bloomDay array,day number , and how many adjecent flower i want to take to make a bouquet.
```
public static int bouquetFormed(int arr[],int day,int conFlower){
    int bouquet=0;
    int n=arr.length;
    int temp=0;
    for(int i=0;i<n;i++){
        if(arr[i]<=day){ 
            temp++;
        }else{
            bouquet+=temp/conFlower;
            temp=0;
        }
    }
    bouquet+=temp/conFlower;
    return bouquet;
}

```

in the above code i am iterating over the array and check which flower is bloomed , once i found that a flower is not bloomed at that time i am calculating how many bouquet i can form. and i am setting the temp as 0 after calculate i am returning the number of bouquet.

i know that the minimum day to take flower for making bouquet that is minimum value in the array (bacause if i take less than that then no flower is bloomed) .

i know that the maximum day to take flower for making bouquet that is maximum value in the array (bacause if i take more than that then the answer is not minimum day which is the voilation of question condition).

```
    int low=Integer.MAX_VALUE;
    int high=Integer.MIN_VALUE;
    for(int ele:bloomDay){
        low=Math.min(low,ele);
        high=Math.max(high,ele);
    }

```

then i can observe that there are some day is not satisfying my condion and some day is satisfying .

so that i can apply the binary search here.

```
        while(low<=high){
            int mid=(low+high)/2;
            int bouquet=bouquetFormed(bloomDay,mid,k);
            if(bouquet>=m){
                ans=mid;
                high=mid-1;
            }
            else{
                low=mid+1;
            }
        }

```
if the bouquet is more than required bouquet(m) then i need to minimize it.

so, here the answer might be my mid (i dont know it is my final answer or not).

but i want to minimize so that i redduce my search space to mid-1;
 thats why **high=mid-1**

if my bouquet which is returned from the function is less than the required bouquet that means i need to maximize the day. so that i can make more bouquet .

thats why low=mid+1;

After all in the ans variable the answer is stored and i am returning it.

# Complexity
- Time complexity:
```
for(int ele:bloomDay){
    low=Math.min(low,ele);
    high=Math.max(high,ele);
}

```
Here the time complexity is $$O(N)$$

```
while(low<=high){
    int mid=(low+high)/2;
    int bouquet=bouquetFormed(bloomDay,mid,k);
    if(bouquet>=m){
        ans=mid;
        high=mid-1;
    }
    else{
        low=mid+1;
    }
}

```
here i an doing a binary search which is O(log N) and every time i an calling a function bouquetFormed which time complexity is O(N) so, the total time complexity of the code is $$O(N log N)$$

```
public static int bouquetFormed(int arr[],int day,int conFlower){
    int bouquet=0;
    int n=arr.length;
    int temp=0;
    for(int i=0;i<n;i++){
        if(arr[i]<=day){
            temp++;
        }else{
            bouquet+=temp/conFlower;
            temp=0;
        }
    }
    bouquet+=temp/conFlower;
    return bouquet;
}

```

Here i am running a loop which is linear time complexity $$O(N)$$



So, the Total time complexity of the problem is $$O(N)+O(N log N)$$

So, we can conclude that the total time complexity is $$O(N log N)$$.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

Here i am not using any extra space to calculate so, the space complexity is constant as $$O(1)$$.


# Java Code
```
class Solution {
    public static int bouquetFormed(int arr[],int day,int conFlower){
        int bouquet=0;
        int n=arr.length;
        int temp=0;
        for(int i=0;i<n;i++){
            if(arr[i]<=day){
                temp++;
            }else{
                bouquet+=temp/conFlower;
                temp=0;
            }
        }
        bouquet+=temp/conFlower;
        return bouquet;
    }
    public int minDays(int[] bloomDay, int m, int k) {
        int n=bloomDay.length;
        if((m*k)>n){
            return -1;
        }
        int low=Integer.MAX_VALUE;
        int high=Integer.MIN_VALUE;
        for(int ele:bloomDay){
            low=Math.min(low,ele);
            high=Math.max(high,ele);
        }
        int ans=-1;
        while(low<=high){
            int mid=(low+high)/2;
            int bouquet=bouquetFormed(bloomDay,mid,k);
            if(bouquet>=m){
                ans=mid;
                high=mid-1;
            }
            else{
                low=mid+1;
            }
        }
        return ans;
    }
}
```


# Code for all Language
```javascript []
/**
 * @param {number[]} bloomDay
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
var minDays = function(bloomDay, m, k) {
    const bouquetFormed = (bloomDay, day, conFlower) => {
        let bouquet = 0;
        let temp = 0;
        for (let i = 0; i < bloomDay.length; i++) {
            if (bloomDay[i] <= day) {
                temp++;
            } else {
                bouquet += Math.floor(temp / conFlower);
                temp = 0;
            }
        }
        bouquet += Math.floor(temp / conFlower);
        return bouquet;
    };

    const n = bloomDay.length;
    if (m * k > n) {
        return -1;
    }

    let low = Math.min(...bloomDay);
    let high = Math.max(...bloomDay);
    let ans = -1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let bouquet = bouquetFormed(bloomDay, mid, k);

        if (bouquet >= m) {
            ans = mid;
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    return ans;
};

```
```python []
class Solution:
    def bouquetFormed(self, bloomDay, day, conFlower):
        bouquet = 0
        temp = 0
        for i in range(len(bloomDay)):
            if bloomDay[i] <= day:
                temp += 1
            else:
                bouquet += temp // conFlower
                temp = 0
        bouquet += temp // conFlower
        return bouquet
    
    def minDays(self, bloomDay, m, k):
        n = len(bloomDay)
        if m * k > n:
            return -1
        
        low = min(bloomDay)
        high = max(bloomDay)
        ans = -1
        
        while low <= high:
            mid = (low + high) // 2
            bouquet = self.bouquetFormed(bloomDay, mid, k)
            
            if bouquet >= m:
                ans = mid
                high = mid - 1
            else:
                low = mid + 1
                
        return ans

```
```ruby []
def bouquet_formed(bloom_day, day, con_flower)
    bouquet = 0
    temp = 0
    bloom_day.each do |b|
        if b <= day
            temp += 1
        else
            bouquet += temp / con_flower
            temp = 0
        end
    end
    bouquet += temp / con_flower
    bouquet
end

def min_days(bloom_day, m, k)
    n = bloom_day.length
    return -1 if m * k > n
    
    low = bloom_day.min
    high = bloom_day.max
    ans = -1
    
    while low <= high
        mid = (low + high) / 2
        bouquet = bouquet_formed(bloom_day, mid, k)
        
        if bouquet >= m
            ans = mid
            high = mid - 1
        else
            low = mid + 1
        end
    end
    
    ans
end

```

# Credit
- Auther: **Chintamani Pala**

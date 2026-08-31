# 📌 STEP - BY - STEP EXPLANATION || SIMPLE || EASY || 100% || 0ms [Java||CPP||Python]

**Author:** ManojKumarPatnaik
**Votes:** 2
**Link:** [https://leetcode.com/problems/kth-largest-element-in-a-stream/solutions/1925104/](https://leetcode.com/problems/kth-largest-element-in-a-stream/solutions/1925104/)

---

```

# **PLEASE UPVOTE IF YOU LIKE THIS SOLUTION**

Approach
There are two parts to the question

Initialising the heap
Adding and finding the kth element in the heap
First, we want to maintain the k largest elements in our heap, as we need to have the kth largest number in our heap. Also note, if we kept a max-heap we would get the largest number, while a min-heap would give the smallest of the k numbers stored in our heap. Hence, that clears up that we need a min-heap here.

Please note the "maintain the k largest elements in our heap" part, as this invariant is the heart of this and other stream related problems and will also help you avoid mistakes if you follow this religiously in your code.

Initialising
We have two scenarios here either the size of initial array is larger than k, or it is not. Based on this our approach will be as below
If it is larger initialise our min-heap with the first k elements(avoid adding one by one in a loop and use heapify function in your language)
If not, initialise with whatever number of elements are available
For the rest of the elements if there are (this logic is similar to handling the stream below)
	Add element to heap
	If size is disturbed(ie. more than k elements) pop an element
Complexity : Time - O(max(k, n)) for initialising k elements, O((n-k)logk) for adding the rest ~ O( max(k, n) + nlogk - klogk), Space - O(k)
Note: if you donot use heapify and add one by one - complexity will be O(max(k, n)logk) which is less optimised than the above in all possible cases. A lot of answers in discuss are using this approach still.
Handling the stream
Add the new number to heap
If the size of the heap is disturbed pop a number out
Return the minimum of the k largest numbers in our heap(ie. the kth largest one)
Complexity : Time: O(logk), Space: O(1), however we are using the heap created above

java

class KthLargest {
    PriorityQueue<Integer> minHeap;
    int k;
    
    public KthLargest(int k, int[] nums) {
        this.k = k;
        minHeap = new PriorityQueue<Integer>((a, b) -> (a - b));
        
        /*
        * Intitution
          here we are using the min heap, which maintain 
          minimum value in root.
        */
        
        
        for(int num : nums){
            //store the all the number in minHeap
            minHeap.add(num);
            
            //remove lowest number, 
            if(minHeap.size() > k) minHeap.remove();     
        }
    }
    
    public int add(int val) {
        //store number in minHeap
        minHeap.add(val);
        
        //remove lowest number, 
        if(minHeap.size() > k) minHeap.remove();
        
        
        return minHeap.peek();
    }
}

cpp

class KthLargest {
private:
    int k;
    priority_queue<int, vector<int>, greater<int>> pq;
public:
    KthLargest(int k, vector<int>& nums) {
        this->k = k;
        auto endPointer = nums.size() < k ? nums.end() : nums.begin()+k;
        pq = priority_queue<int, vector<int>, greater<int>> (nums.begin(), endPointer);
        for(int i = k; i < nums.size(); ++i) {
            pq.push(nums[i]);
            pq.pop();
        }
    }
    
    int add(int val) {
        pq.push(val);
        if(pq.size() > k) pq.pop();
        return pq.top();
    }
};

int main() {
    vector<int> nums({4, 5, 8, 2}), stream({3, 5, 10, 9, 4});
    KthLargest* obj = new KthLargest(3, nums);
    for(auto num: stream) cout<<obj->add(num)<<" ";
}


python

class KthLargest(object):

    def __init__(self, k, nums):
        """
        :type k: int
        :type nums: List[int]
        """
        self.k = k
        self.pq = []
        for i in range(0, min(k, len(nums))) : self.pq.append(nums[i])
        heapify(self.pq)
        for i in range(k, len(nums)):
            heappush(self.pq, nums[i])
            heappop(self.pq)
        

    def add(self, val):
        """
        :type val: int
        :rtype: int
        """
        heappush(self.pq, val)
        if len(self.pq) > self.k : heappop(self.pq)
        return self.pq[0]


nums, stream = [4, 5, 8, 2], [3, 5, 10, 9, 4]
obj = KthLargest(3, nums)
for i in range(0, len(stream)) : print(obj.add(stream[i]), " ", end = '')
```
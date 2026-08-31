# Official Solution

**Link:** [https://leetcode.com/problems/join-two-arrays-by-id/solution/](https://leetcode.com/problems/join-two-arrays-by-id/solution/)

---

[TOC]


## Overview:
We need to merge two arrays, `arr1` and `arr2`, based on their "id" key. The resulting array, `joinedArray`, should contain all the unique objects from both arrays, sorted in ascending order of their `id` values. When objects share the same `id`, their properties should be merged, with values from `arr2` overriding values from `arr1`. If an `id` exists in only one array, the single object with that `id` should be included without modification.

---

## Some practical use cases:

* **Data Integration:** When integrating data from multiple sources, each source may provide data in separate arrays with a common ID. Merging these arrays based on the ID allows for combining and consolidating the data into a single dataset for analysis or processing.

* **Social Media Analysis:** When analyzing social media data, merging arrays based on user or post IDs can bring together relevant information like user profiles, comments, likes, and shares. This enables comprehensive analysis, sentiment analysis, identifying popular posts, or finding patterns in user behavior.

* **Geographic Information Systems (GIS):** In GIS applications, merging arrays based on location IDs or geographic identifiers enables the integration of spatial data. This can involve merging arrays containing geographic features, attributes, and other relevant information, facilitating spatial analysis, mapping, and decision-making.

* **Supply Chain Management:** In supply chain systems, merging arrays based on unique identifiers like product codes or order IDs allows for tracking and managing the flow of goods or services. Merging arrays helps consolidate information from different stages of the supply chain, such as procurement, production, distribution, and delivery, enabling efficient monitoring and optimization.

---

## Approach 1: Brute Force

* We start by creating a new array called `combinedArray` by combining the contents of `arr1` and `arr2`. This ensures that all the objects from both arrays are included in a single array.
* Next, we initialize an empty object named `merged`. This object will serve as a container to store the merged objects based on their ID as the key.
* We then iterate over each object in the `combinedArray` using the forEach method. For each object, we check if its ID already exists as a key in the `merged` object.
* If the ID does not exist in the `merged` object, we add a new key-value pair to the `merged` object. The key is the ID, and the value is a new object that we create by making a copy `(...obj)` of the current object. This ensures that each object has its own independent copy in the `merged` object.
* However, if the ID already exists in the `merged` object, it means that there is another object with the same ID. In this case, we perform a merge of the properties. We update the existing object in `merged` by copying its properties `(...merged[id])` and then overriding them with the properties of the current object `(...obj)`. This ensures that the properties from `arr2` take precedence over `arr1` during the merging process.
* After merging all the objects, we extract the values from the `merged` object using `Object.values()`. This creates an array, `joinedArray`, that contains only the `merged` objects without the ID keys.
* In the end return the object values.

> Note: Since ES2015, JavaScript object keys are ordered by default. Positive numerical keys are guaranteed to maintain their order in objects according to the [language specification](https://tc39.es/ecma262/#sec-ordinaryownpropertykeys), so there's no need to sort the keys after merging objects.

### Implementation:


<iframe src="https://leetcode.com/playground/6sx3fArW/shared" frameBorder="0" width="100%" height="395" name="6sx3fArW"></iframe>


### Complexity Analysis:

* **Time complexity:** The time complexity is $$O(nlogn)$$ due to the `sort` function, where $$n$$ is the total number of elements in the combined array (length of `arr1` plus length of `arr2`). The iteration and merging process also contributes to the time complexity, but it is dominated by the sorting operation.

* **Space complexity:** The space complexity is $$O(n)$$, where $n$ is again the total number of elements in the combined array. This is because a new array (`combinedArray`) and a new object (`merged`) are created, each of which can potentially store all the elements from `arr1` and `arr2`.

---

## Approach 2: Using Map

### Intuition:
We can combine two arrays, `arr1` and `arr2`, using a Map. We add all objects from `arr1` to the Map and then merge the objects from `arr2` based on their ID. The merged objects are stored in an array called `res`. Finally, we sort the `res` array in ascending order based on the ID property.

### Algorithm:
* We start by creating a new Map object called `map`. A Map is used to efficiently store and retrieve key-value pairs.
* We iterate over each object in `arr1` using a for-of loop. For each object, we set its ID as the key and the entire object as the value in the `map`.
* Next, we iterate over each object in `arr2` using another for-of loop. For each object, we check if its ID already exists as a key in the `map`.
* If the ID does not exist in the `map`, we set the ID as the key and the entire object as the value in the `map`. This ensures that the object is included in the `res` array without modification.
* However, if the ID already exists in the `map`, we retrieve the existing object using `map.get(obj.id)`. We then iterate over each property of the current object using `Object.keys(obj)`.
* For each property, we update the corresponding property of the existing object with the value from the current object. This merging process ensures that values from `arr2` override values from `arr1` when the objects share the same ID.
* After merging all the objects, we create an empty array called `res` to store the final result.
* We iterate over the keys of the map using `map.keys()`. For each key, we retrieve the corresponding object using `map.get(key)` and push it into the `res` array.
* Finally, we `sort` the `res` array in ascending order based on the ID using the sort method along with a comparator function `(a, b) => a.id - b.id`. This ensures that the objects are arranged in the correct order based on their IDs.
* In the end, we return the sorted `res` array as the final result of the join function.

### Implementation:


<iframe src="https://leetcode.com/playground/UoVg9xVe/shared" frameBorder="0" width="100%" height="480" name="UoVg9xVe"></iframe>


### Complexity Analysis:

* **Time complexity:** The time complexity is $$O(nlogn)$$ due to the `sort` function, where $$n$$ is the total number of elements in the combined array (length of `arr1` plus length of `arr2`). The iteration and merging process also contributes to the time complexity, but it is dominated by the sorting operation.

* **Space complexity:** The space complexity is $$O(n)$$, where $n$ is the total number of elements in the map.

---

## Approach 3: Using Two pointers

### Intuition:
Main idea is similar to merging two sorted arrays. It iterates through the sorted `arr1` and `arr2`, comparing IDs and adding objects to the resulting `joinedArray` and increment the pointers for one or the other array depending on which element we need to insert. Once one array is fully processed, any remaining objects from the other array are inserted.

### Algorithm:
* We begin by sorting both `arr1` and `arr2` in ascending order based on their ID. This ensures that we process the objects in a consistent order during the merging process.
* We initialize an empty array called `joinedArray` to store the merged objects.
* We use two pointers, `i` and `j`, to keep track of the current positions in `arr1` and `arr2` respectively. We start with `i = 0` and `j = 0`.
* We enter a while loop that continues until we reach the end of either `arr1` or `arr2`. Inside the loop, we compare the IDs of the objects at the current positions (`arr1[i].id` and `arr2[j].id`).
* If the ID in `arr1` is smaller than the ID in `arr2`, we add the object from `arr1` to `joinedArray` and increment `i` to move to the next object in `arr1`.
* If the ID in `arr1` is larger than the ID in `arr2`, we add the object from `arr2` to `joinedArray` and increment `j` to move to the next object in `arr2`.
* If the IDs are the same, we merge the properties of the objects from both arrays. We create a new object by spreading the properties of `arr1[i]` and then overriding any matching properties with the corresponding values from `arr2[j]`. The merged object is added to `joinedArray`, and both `i` and `j` are incremented to move to the next objects in both arrays.
* After the while loop, we check if there are any remaining objects in `arr1` or `arr2`. If there are, we enter separate while loops to add the remaining objects to `joinedArray`.
* Finally, we return the `joinedArray`, which contains all the merged objects from both arrays.

### Implementation:

<iframe src="https://leetcode.com/playground/EfCwR6Vm/shared" frameBorder="0" width="100%" height="500" name="EfCwR6Vm"></iframe>


### Complexity Analysis:

* **Time complexity:** The `arr.sort` takes a $$O(nlogn)$$ time complexity, where $n$ is the length of the largest array. 

* **Space complexity:** Since we are creating a `joinedArray` to store the result, which can grow up to the size of `arr1` and `arr2` we can say that the space complexity is $$O(n)$$, where `n` is the total number of elements in `arr1` and `arr2`. However, in reality we only consider the auxiliary space (space used not including the input and output), the real space complexity would be $$O(1)$$. This is because the additional space used by the algorithm for the variables and pointers (`i` and `j`) does not change with the size of the input arrays.  

---

## Interview Tips:

* What is the purpose of sorting the resulting array?
    * Sorting the array in ascending order of the id key ensures that the objects are arranged in a specific order. This makes it easier to locate and retrieve objects based on their id value, especially for further processing or analysis.

* Can the merging process be performed in-place, modifying the original arrays?
    * In general, it is recommended to avoid modifying the original arrays during the merging process to maintain immutability and avoid unintended side effects. Modifying the original arrays can introduce complexities, especially if the arrays are shared or used in multiple contexts. It's usually better to create a new merged array to ensure data integrity and maintain the original arrays in their original state.

* Why is merging arrays based on a common key useful in programming?
    * Merging arrays based on a common key is a common operation in programming, especially when working with relational or structured data. It allows us to combine and consolidate information from multiple sources, facilitating data analysis, data processing, and data integration. By merging arrays based on a shared key, we can bring related data together, establish relationships, and perform further operations on the combined data set.

---
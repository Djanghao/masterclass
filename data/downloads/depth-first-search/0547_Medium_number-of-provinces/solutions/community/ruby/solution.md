# Ruby solution

**Author:** ozovalihasan
**Votes:** 2
**Link:** [https://leetcode.com/problems/number-of-provinces/solutions/3508084/](https://leetcode.com/problems/number-of-provinces/solutions/3508084/)

---

# Code
```ruby []
# @param {Integer[][]} is_connected
# @return {Integer}
def find_circle_num(is_connected)
  @is_connected = is_connected
  @group_label = []
  groups_count = 0

  is_connected.each_index do |city_index|
    next if @group_label[city_index]

    groups_count += 1 
    check_city(city_index, groups_count)
  end
  
  groups_count
end

def check_city(city_index, label)
  @group_label[city_index] = label
  @is_connected[city_index].each_with_index do |connection_status, connected_city_index|
    next unless cities_connected? connection_status 
    next if checked?(connected_city_index)
    
    check_city(connected_city_index, label)
  end

end

def checked?(city_index)
  @group_label[city_index]
end

def cities_connected? status 
  status == 1
end
```
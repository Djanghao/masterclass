# Ruby solution

**Author:** jose_hj
**Votes:** 0
**Link:** [https://leetcode.com/problems/get-watched-videos-by-your-friends/solutions/5895734/](https://leetcode.com/problems/get-watched-videos-by-your-friends/solutions/5895734/)

---



# Code
```ruby []
# @param {String[][]} watched_videos
# @param {Integer[][]} friends
# @param {Integer} id
# @param {Integer} level
# @return {String[]}
def watched_videos_by_friends(watched_videos, friends, id, level)
  visited = [0]*friends.size
  visited[id] = true
  friends_data = [[id, 0]]
  
  level_friends = []
  
  while friends_data.size > 0 do
    person = friends_data.pop
    if person[1] == level
      level_friends << person[0]
    else
      friends[person[0]].each do |friend|
        if visited[friend] == 0
          visited[friend] = true
          friends_data << [friend, person[1] + 1]
        end
      end
    end
  end

  video_views = {}
  level_friends.each do |f|
    watched_videos[f].each do |v|
      video_views[v] = (video_views[v] || 0) + 1
    end
  end

  video_views.keys.sort_by { |i| [video_views[i], i] }
end

```
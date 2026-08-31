# Trie solution in Elixir

**Author:** user5355G
**Votes:** 0
**Link:** [https://leetcode.com/problems/remove-sub-folders-from-the-filesystem/solutions/5966007/](https://leetcode.com/problems/remove-sub-folders-from-the-filesystem/solutions/5966007/)

---

# Code
```elixir []
defmodule Solution do
  @spec remove_subfolders(folder :: [String.t]) :: [String.t]
  def remove_subfolders(paths) do
    build_folder(paths)
    |> drop_sub_folders()
    |> folders_to_paths("", [])
  end

  def build_folder(paths) do
    List.foldl(
      paths,
      { :notListed, %{} },
      fn path, folder ->
        [_emptyString | pathComponents] = String.split(path, "/")
        insert_path_in_folder(folder, pathComponents)
      end
    )
  end

  def insert_path_in_folder({ _isListed, children }, []) do
    {
      :listed,
      children
    }
  end
  def insert_path_in_folder({ isListed, children }, [pathComponent | restOfPath]) do
    {_oldValue, childrenUpdated} = Map.get_and_update(children, pathComponent,
      fn current_value ->
        if current_value do
          { current_value, insert_path_in_folder(current_value, restOfPath) }
        else
          { current_value, insert_path_in_folder({ :notListed, %{} }, restOfPath) }
        end
      end
    )
    { isListed, childrenUpdated }
  end

  def drop_sub_folders({ :listed, _children }) do
    { :listed, %{} }
  end
  def drop_sub_folders({ notListed, children }) do
    {
      notListed,
      Enum.map(children, fn {pathComponent, child} -> {pathComponent, drop_sub_folders(child)} end) |> Map.new
    }
  end

  def folders_to_paths({ :listed, children }, currentPath, output) do
    Enum.reduce(
      children,
      [currentPath | output],
      fn {pathComponent, child}, output -> folders_to_paths(child, currentPath <> "/" <> pathComponent, output) end
    )
  end
  def folders_to_paths({ notListed, children }, currentPath, output) do
    Enum.reduce(
      children,
      output,
      fn {pathComponent, child}, output -> folders_to_paths(child, currentPath <> "/" <> pathComponent, output) end
    )
  end
end

```
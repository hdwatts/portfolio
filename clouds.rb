def explode_bomb(arr, x, y)
  arr[y][x] = "."

  if y > 0
    arr[y-1][x] = "."
  end
  if y < arr.length-1
    arr[y+1][x] = "."
  end
  if x > 0
    arr[y][x-1] = "."
  end
  if x < arr[y].length-1
    arr[y][x+1] = "."
  end

  arr
end

def explode_bombs(tmp, arr)
  tmp.each_with_index do |asdf, y|
    tmp[y].each_with_index do |asdf2, x|
      if tmp[y][x] == "O"
        arr = explode_bomb(arr, x, y)
      end
    end
  end

  arr
end

def full_map(h,w)
  arr = []

  h.times do |y|
    arr[y] = []
    w.times do |x|
      arr[y][x] = "O"
    end
  end

  arr
end

def printMap(arr)
  arr.each do |y|
    y.each do |x|
      print x
    end
    print "\n"
  end
end

def newMap(arr)
  newtmp = []
  arr.each_with_index do |asdf, y|
    newtmp[y] = []
    arr[y].each_with_index do |asdf2, x|
      newtmp[y][x] = arr[y][x]
    end
  end
  newtmp
end

h,w,s = gets.chomp.split(" ")

arr = []
h.to_i.times do
  arr << gets.chomp.split("")
end

tmp = ""

s.to_i.times do |i|
  if i+1 > 1
    if (i+1).even?
      tmp = newMap(arr)
      arr = full_map(h.to_i,w.to_i)
    else
      arr = explode_bombs(tmp, arr)
    end
  end
end
printMap(arr)

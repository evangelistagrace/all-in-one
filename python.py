## printing
print('Hello world')

## datatypes
#string
string = 'This is a string' 
#int
integer = 4 
#float
float_demo = 4.3 
#boolean
is_true = False 

# type of
print(type(is_true)) #<class 'bool'>

## string methods
str = 'String A'
str2 = 'Pepa peeped through a peep hole and peeped she did a big apple tree'

#concatenation
print(str + 'String B') #String AString B

#concatenation #2
print(str, 'String B') #String A String B

#duplicate
print(str*2) #String AString A

#uppercase
print(str.upper()) #STRING A

#lowercase
print(str.lower()) #string a

#capitalize first character
print(str.capitalize()) #String a

#capitalize first letter of each word
print(str.title()) #String A

#find the length of a string
print(len(str)) #8

#count instances of a word in a string (case sensitive)
print(str2.count('peeped')) #2

#slicing
print(str[1]) #t
print(str[2:]) #ring A
print(str[2:6]) #ring (not inclusive of character with end index)
print(str[:7]) #String





def is_isogram(string):
    # remove all hyphens,spaces
    word = "".join(list(string.replace('-','').replace(' ','')))
    #
    return len(set(list(word.lower()))) == len(word)


is_isogram('Emily Jung Schwartzkopf')
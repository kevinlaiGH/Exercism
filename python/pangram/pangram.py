import re

def is_pangram(sentence):

    clean_sentence = re.sub('[^A-Za-z]+', '', sentence).lower()

    if len(set(clean_sentence)) != 26:
        return False
    return True


    




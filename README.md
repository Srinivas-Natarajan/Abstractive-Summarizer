# Abstractive-Summarization-using-BART
An abstractive summarization tool that can condense documents and web pages using Bidirectional Auto-Regressive Encoders for Transformer or BART for short. It is a desktop application with a UI constructed with python.

## How to Run it
  1. Install required packages using thr requirements.txt 
  > pip install -r requirements.txt
  2. Run Main.py


## 1. Architecture Diagram
![Architecture Diagram](https://github.com/Srinivas-Natarajan/Abstractive-Summarization-using-BART/blob/main/images/Architecture%20Diagram.png)

<p>
The system diagram starts with the methods of input with the standard techniques that involve typing out documents or uploading text files or documents from the user’s systems. If the users want to extract information from a webpage, the URL to the webpage is provided in a text field, and the request is sent to the Web Scraping module, which collects this information from the webpage and processes it to remove unnecessary details such as tags, links, and stopwords, etc. The Text summarization model takes this document which has been input and creates a bag of word models to collect only the vital information, which is then displayed to the User. The user is then allowed an option to encrypt the data using the ECIES algorithm, which generates a 256-bit symmetric key for the user with the ability to exchange this key with other users using the Diffie Hellman Key Exchange algorithm. This file can then be saved to the user’s system for future reference or shared with other authorized personnel.
</p>

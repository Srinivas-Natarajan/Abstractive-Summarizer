# Abstractive-Summarization-using-BART
An abstractive summarization tool that can condense documents and web pages using Bidirectional Auto-Regressive Encoders for Transformer or BART for short. It is a desktop application with a UI constructed with python.

## How to Run it
  1. Install required packages using thr requirements.txt 
  > pip install -r requirements.txt
  2. Run Main.py

<br/>

## 1. Architecture Diagram
<p align="center">
  <img src="https://github.com/Srinivas-Natarajan/Abstractive-Summarization-using-BART/blob/main/images/Architecture%20Diagram.png" alt="Architecture Diagram" height="200"/>
</p>

<p>
The system diagram starts with the methods of input with the standard techniques that involve typing out documents or uploading text files or documents from the user’s systems. If the users want to extract information from a webpage, the URL to the webpage is provided in a text field, and the request is sent to the Web Scraping module, which collects this information from the webpage and processes it to remove unnecessary details such as tags, links, and stopwords, etc. The Text summarization model takes this document which has been input and creates a bag of word models to collect only the vital information, which is then displayed to the User. The user is then allowed an option to encrypt the data using the ECIES algorithm, which generates a 256-bit symmetric key for the user with the ability to exchange this key with other users using the Diffie Hellman Key Exchange algorithm. This file can then be saved to the user’s system for future reference or shared with other authorized personnel.
</p>

<br/>

## 2. Methodology

<p>
In the BERT architecture, the model has access to the entire sequence of tokens to predict the masked or missing tokens. While this may be useful for other NLP tasks such as predicting token positions, it is limited in summarization tasks. Summarization tasks, by their nature, limit the model to the tokens seen thus far. The argument that controls much information is available to the model is known as the attention mask.
</p>

<p align="center">
  <img src="https://github.com/Srinivas-Natarajan/Abstractive-Summarization-using-BART/blob/main/images/BERT%20Mask.png" alt="BERT Mask" height="200"/>
</p>

<p>
The GPT2 model is more suited for the prediction of the next masked token due to its use of the casual attention mask. This makes it suitable for prediction tasks but less effective at downstream tasks, such as situations where the whole input is required to give an output. In essence, GPT2 only uses words it has seen before.
</p>

<p align="center">
  <img src="https://github.com/Srinivas-Natarajan/Abstractive-Summarization-using-BART/blob/main/images/GPT2%20mask.png" alt="GPT2 Mask" height="200"/>
</p>

<p>
BART adopts a fully visible mask similar to BERT for its encoding process and a casual mask similar to the GPT2 model for the decoder process. The encoder and decoder are connected through cross attention, where every decoder layer performs attention over the encoder’s hidden states. This structure helps the overall output be closer to the input given.
</p>

<br/>

## 3. Results

### A. Rouge-1 Scores
<img src="https://github.com/Srinivas-Natarajan/Abstractive-Summarization-using-BART/blob/main/images/Rouge_1.png" alt="Rouge1" height="200"/>  

### B. Rouge-2 Scores
<img src="https://github.com/Srinivas-Natarajan/Abstractive-Summarization-using-BART/blob/main/images/Rouge_2.png" alt="Rouge1" height="200"/>      

### C. Rouge-L Scores
<img src="https://github.com/Srinivas-Natarajan/Abstractive-Summarization-using-BART/blob/main/images/Rouge_L.png" alt="Rouge1" height="200"/>    
                                                                                                                                       






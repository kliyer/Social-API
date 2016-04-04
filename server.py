#!/usr/bin/python
import SimpleHTTPServer, SocketServer
import tweepy
import json
import urlparse

PORT_NUMBER = 808

#This class will handles any incoming request from
#the browser 
class myHandler(SimpleHTTPServer.SimpleHTTPRequestHandler):
	
	#Handler for the GET requests
	def do_GET(self):
		print self.path
		if '/tweets' in self.path:
			self.send_response(200)
			CONSUMER_KEY = 'GQkoGBPeCj5tOsm9joItU9ESA'
			CONSUMER_SECRET = 'VxiHUAAZQESR7KawhrhMRkVy325WoJwf7crySkNIlY10BsvwLw'
			ACCESS_KEY = '713473708464037888-Ugb7JN77b0Fx0EbPCSJPL53hyLz5ujZ'
			ACCESS_SECRET = 'yG2hwikJPkJuglopw1yQcbcifmKftW15b5dLPDHCMNZtv'

			search = urlparse.parse_qs(urlparse.urlparse(self.path).query).get('q', None)[0]
			print "Searching tweets for: " , search

			auth = tweepy.auth.OAuthHandler(CONSUMER_KEY, CONSUMER_SECRET)
			auth.set_access_token(ACCESS_KEY, ACCESS_SECRET)
			api = tweepy.API(auth)
			search_results = api.search(q=search, count=100)
			self.send_response(200)
			self.send_header('Content-type', 'text/json')
			self.end_headers()

			response = []

			for i in search_results:
				response.append(i.text.encode("utf-8"))

			self.wfile.write(json.dumps(response))

		else:
			SimpleHTTPServer.SimpleHTTPRequestHandler.do_GET(self)

try:
	#Create a web server and define the handler to manage the
	#incoming request
	handler = myHandler
	server = SocketServer.TCPServer(("",PORT_NUMBER), handler)
	print "Starting server at port " , PORT_NUMBER
	server.serve_forever()

except KeyboardInterrupt:
	print '^C received, shutting down the web server'
	server.socket.close()
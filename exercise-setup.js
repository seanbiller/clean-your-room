var usernames = [
	'antdesroche',
	'ckirkwood7464',
	'connormgerrits',
	'DDiggs0798',
	'DuuCodes',
	'FrancisGichuhi',
	'itsdanielguerrero',
	'Keefelaporte',
	'Kullen7117',
	'm-madelyn',
	'mjamison3',
	'mlundstrom23',
	'sashgems',
	'seanbiller'
];

var repo_name = 'for-the-empire';
var out = '';

usernames.forEach(function(username) {
	out = out + '\n' + 'git remote add ' + username + ' https://github.com/' + username + '/' + repo_name;
	out = out + '\n' + 'git push ' + username;
});

console.log(out);

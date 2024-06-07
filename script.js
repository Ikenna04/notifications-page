const lis = document.querySelectorAll('.main li');

arr = [];

const computeUnread = () => {
		lis.forEach(e => {
			if (e.classList.contains('message-unread')) {
				arr.push(e);
			}
		});

		document.querySelector('.header li:nth-of-type(2)').textContent =
			arr.length;
		arr = [];
	},
	markAllAsRead = () => {
		lis.forEach(e => {
			e.classList.remove('message-unread');
		});
		computeUnread();
	};

for (let i = 0; i < lis.length; i++) {
	lis[i].addEventListener('click', () => {
		lis[i].classList.remove('message-unread');
		computeUnread();
	});
}

document.querySelector('.mark-all').addEventListener('click', markAllAsRead);

computeUnread();

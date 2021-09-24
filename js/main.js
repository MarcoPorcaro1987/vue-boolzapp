var app = new Vue({
    el: '#root',
    data: {
		contacts: [
			{
				name: 'Michele',
				avatar: '_1',
				visible: true,
				messages: [
					{
						date: '10/01/2020 15:30:55',
						message: 'Hai portato a spasso il cane?',
						status: 'sent'
					},
					{
						date: '10/01/2020 15:50:00',
						message: 'Ricordati di dargli da mangiare',
						status: 'sent'
					},
					{
						date: '10/01/2020 16:15:22',
						message: 'Tutto fatto!',
						status: 'received'
					}
				],
			},
			{
				name: 'Fabio',
				avatar: '_2',
				visible: true,
				messages: [{
					date: '20/03/2020 16:30:00',
					message: 'Ciao come stai?',
					status: 'sent'
				},
					{
						date: '20/03/2020 16:30:55',
						message: 'Bene grazie! Stasera ci vediamo?',
						status: 'received'
					},
					{
						date: '20/03/2020 16:35:00',
						message: 'Mi piacerebbe ma devo andare a fare la spesa.',
						status: 'sent'
					}
				],
			},
			{
				name: 'Samuele',
				avatar: '_3',
				visible: true,
				messages: [{
					date: '28/03/2020 10:10:40',
					message: 'La Marianna va in campagna',
					status: 'received'
				},
					{
						date: '28/03/2020 10:20:10',
						message: 'Sicuro di non aver sbagliato chat?',
						status: 'sent'
					},
					{
						date: '28/03/2020 16:15:22',
						message: 'Ah scusa!',
						status: 'received'
					}
				],
			},
			{
				name: 'Luisa',
				avatar: '_4',
				visible: true,
				messages: [{
					date: '10/01/2020 15:30:55',
					message: 'Lo sai che ha aperto una nuova pizzeria?',
					status: 'sent'
				},
					{
						date: '10/01/2020 15:50:00',
						message: 'Si, ma preferirei andare al cinema',
						status: 'received'
					}
				],
			},
		],
		contactIndex: 0,
		newMessage : "",
		cpuMessage : "ok",
		search: ""
  	},
	methods:{
		changeContact: function(index){
			this.contactIndex = index;			
		},

		typeMessage: function(){
			if(this.newMessage != ""){
				let userType = {
					date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
					message: this.newMessage, 
					status: 'sent'
				}
				this.contacts[this.contactIndex].messages.push(userType);
				this.newMessage = "";
				setTimeout(() => this.cpuTypeMessage(), 1000);
			}
		},

		cpuTypeMessage: function (){
			let cpuType = 
			{
				date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
				message: this.cpuMessage, 
				status: 'received'
				}
			this.contacts[this.contactIndex].messages.push(cpuType)
		},

		searchContact: function () {
            this.contacts.forEach((contact) => {
                let UCName = contact.name.toUpperCase();
				let LCName = contact.name.toLowerCase();
                if  (UCName.includes(this.search) || LCName.includes(this.search)) {
                    contact.visible = true;
                } else {
                    contact.visible = false;    
                }
            });
        },
    }
});

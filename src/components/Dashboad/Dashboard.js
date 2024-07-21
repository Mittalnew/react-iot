import React from 'react';

const cards = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1720611940419-67c7717aa08d?q=80&w=1927&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Card 1',
    description: 'This is the description for Card 1',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1525427926086-a0f15d186daf?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Card 2',
    description: 'This is the description for Card 2',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1719237555061-14fd7612fc5e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Card 3',
    description: 'This is the description for Card 3',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1659959104077-d7f31aa44d92?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Card 4',
    description: 'This is the description for Card 4',
  },
];

function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <h1 className="text-2xl font-bold mb-8 text-center">Cardboard</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {cards.map((card) => (
              <div key={card.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src={card.image} alt={card.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h2 className="font-bold text-xl mb-2">{card.title}</h2>
                  <p className="text-gray-700 text-base">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
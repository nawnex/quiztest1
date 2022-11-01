const quizData = [
    {
      question: 'Q1 When you are giving mouth to mouth you should only stop when:',
      Mark: 'Mark one answer',
      a: 'You think the casualty is dead',
      b: 'The casualty can breathe without help',
      c: 'The casualty has turned blue',
      d: 'You think the ambulance is coming',
      correct: 'b',
    },
    {
      question: 'Q2 On a motorway you may ONLY stop on the hard shoulder:',
      Mark: 'Mark one answer',
      a: 'If you go passed the exit that you wanted to take',
      b: 'If you feel tired and need a rest',
      c: 'In an emergency',
      d: 'To pick up a hitchhiker',
      correct: 'c',
    },
    {
      question: 'Q3 Why should you check over your shoulder before turning left into a side road?',
      Mark: 'Mark one answer',
      a: 'To check for emergency traffic',
      b: 'To confirm your intention to turn',
      c: 'To check for overtaking vehicles',
      d: 'To make sure the side road is clear',
      correct: 'c',
    },
    {
      question: 'Q4 You are travelling at the legal speed limit. vehicle comes up quickly behind, flashing its headlights. You should:',
      Mark: 'Mark one answer',
      a: 'Maintain your speed to prevent the vehicle from overtaking',
      b: 'Touch the brakes sharply to show your lights',
      c: 'Accelerate to make a gap behind you',
      d: 'Allow the vehicle to overtake',
      correct: 'd',
    },
    {
      question: 'Q5 You keep well back while waiting to overtake a large vehicle. A car fills the gap. You should:',
      Mark: 'Mark one answer',
      a: 'Drop back further',
      b: 'Flash your headlights',
      c: 'Sound your horn',
      d: 'Start to overtake',
      correct: 'a',
    },
    {
      question: 'Q6 When riding long distances at speed, noise can cause fatigue. What can you do to help reduce this?',
      Mark: 'Mark one answer',
      a: 'Vary your speed',
      b: 'Wear ear plugs',
      c: 'Use an open face helmet',
      d: 'Ride in the upright position',
      correct: 'a',
    },
    {
      question: 'Q7 Which of the following should you do when riding?',
      Mark: 'Mark two answers',
      a: 'Keep close to the vehicle in front',
      b: 'Keep your visor or goggles clear',
      c: 'Keep the vehicle in front in view',
      d: 'Use your dipped headlights',
      e: 'Ride close to the centre of the road',
      correct: ['b', 'd'],
    },
    {
      question: 'Q8 Road surfaces tend to be at their most slippery:',
      Mark: 'Mark one answer',
      a: 'During the late afternoon',
      b: 'After heavy prolonged rain',
      c: 'During a long dry spell',
      d: 'After a long dry spell followed by a shower of rain',
      correct: 'd',
    },
    {
      question: 'Q9 Why is it a good idea to plan your journey to avoid busy times?',
      Mark: 'Mark one answer',
      a: 'You will travel a much shorter distance',
      b: 'You will see less road works',
      c: 'Your vehicle will use more fuel',
      d: 'It will help to ease congestion',
      correct: 'd',
    },
    {
      question: 'Q10 You are on a motorway at night. You MUST have your headlights switched on unless:',
      Mark: 'Mark one answer',
      a: 'The motorway is lit',
      b: 'There are vehicles close in front of you',
      c: 'Your motorcycle has broken down on the hard shoulder',
      d: 'You are travelling below 100 kph',
      correct: 'c',
    },
    {
      question: 'Q11 Riding your motorcycle with a slack or worn drive chain may cause:',
      Mark: 'Mark one answer',
      a: 'Early tyre wear',
      b: 'Increased emissions',
      c: 'An engine misfire',
      d: 'locked wheel',
      correct: 'd',
    },
    {
      question: 'Q12 Why are place names painted on the road surface?',
      Mark: 'Mark one answer',
      a: 'To warn you of oncoming traffic',
      b: 'To enable you to change lanes early',
      c: 'To restrict the flow of traffic',
      d: 'To prevent you changing lanes',
      correct: 'b',
    },
    {
      question: 'Q13 Some two way roads are divided into three lanes. Why are these particularly dangerous?',
      Mark: 'Mark one answer',
      a: 'Traffic can overtake on the left',
      b: 'Traffic uses the middle lane for emergencies only',
      c: 'Traffic in both directions can use the middle lane to overtake',
      d: 'Traffic can travel faster in poor weather conditions',
      correct: 'c',
    },
    {
      question: 'Q14 A wrongly adjusted drive chain can:',
      Mark: 'Mark three answers',
      a: 'Create a noisy rattle',
      b: 'Cause a suspension fault',
      c: 'Cause an accident',
      d: 'Make wheels wobble',
      e: 'Affect gear changing',
      correct: ['a', 'c', 'e'],
    },
    {
      question: 'Q15 Tailgating means:',
      Mark: 'Mark one answer',
      a: 'Following another vehicle too closely',
      b: 'Using the rear door of a hatchback car',
      c: 'Driving with rear fog lights',
      d: 'Reversing into a parking space',
      correct: 'a',
    },
    {
      question: 'Q16 You should always check for blind areas before:',
      Mark: 'Mark one answer',
      a: 'Giving a signal',
      b: 'Moving off',
      c: 'Changing gear',
      d: 'Slowing down',
      correct: 'b',
    },
    {
      question: 'Q17 The dual carriageway you are turning left onto has a very narrow central reservation. What should you do?',
      Mark: 'Mark one answer',
      a: 'Wait until the road is clear on both directions',
      b: 'Stop on the first lane so that other vehicles give way',
      c: 'Proceed to the central reservation and wait',
      d: 'Emerge slightly to show your intentions',
      correct: 'a',
    },
    {
      question: 'Q18 Which of these emergency services might have blue flashing beacons?',
      Mark: 'Mark one answer',
      a: 'Animal ambulances',
      b: 'Doctors cars',
      c: 'Bomb disposal',
      d: 'Gritting lorries',
      correct: 'c',
    },
    {
      question: 'Q19 You have adjusted the tension on your drive chain you should check:',
      Mark: 'Mark one answer',
      a: 'Valve clearance',
      b: 'Tyre pressure',
      c: 'Rear wheel alignment',
      d: 'Sidelights',
      correct: 'c',
    },
    {
      question: 'Q20 When riding wearing brightly coloured clothing you will:',
      Mark: 'Mark one answer',
      a: 'Be seen more easily by other motorists',
      b: 'Create a hazard by distracting other drivers',
      c: 'Dazzle other motorists on the road',
      d: 'Be able to ride on unlit roads with sidelights',
      correct: 'a',
    },
    {
      question: 'Q21 When riding in heavy rain a film of water can build up between the road surface and your tyres. This may result in loss of control. What can you do to avoid this?',
      Mark: 'Mark one answer',
      a: 'Increase your tyre pressure',
      b: 'Decrease your tyre pressure',
      c: 'Keep trying your brakes',
      d: 'Keep your speed down',
      correct: 'd',
    },
    {
      question: 'Q22 When riding a sidecar attachment for the first time you should:',
      Mark: 'Mark two answers',
      a: 'Keep your speed down',
      b: 'Accelerate quickly round bends',
      c: 'Approach corners more carefully',
      d: 'Be able to stop more quickly',
      correct: ['a', 'c'],
    },
    {
      question: 'Q23 If you get cold and wet when riding. What is likely to happen?',
      Mark: 'Mark two answers',
      a: 'Your helmet may loosen',
      b: 'You may lose concentration',
      c: 'Your visor may freeze',
      d: 'Your reaction time may be slower',
      e: 'You may slide off the seat',
      correct: ['b', 'd'],
    },
    {
      question: 'Q24 At traffic lights you see the amber light ahead. Which light or lights, will come next?',
      Mark: 'Mark one answer',
      a: 'Green and amber together',
      b: 'Red alone',
      c: 'Red and amber together',
      d: 'Green alone',
      correct: 'b',
    },
    {
      question: 'Q25 You are driving on a motorway. A red cross is displayed above the hard shoulder. What does this mean?',
      Mark: 'Mark one answer',
      a: 'Pull up on the lane to answer your mobile phone',
      b: 'Use this as a running lane',
      c: 'This lane can be closed if you need a rest',
      d: 'You should not travel on this lane',
      correct: 'd',
    },
    {
      question: 'Q26 Motorcyclist are particularly vulnerable:',
      Mark: 'Mark one answer',
      a: 'On dual carriageways',
      b: 'On motorways',
      c: 'When moving off',
      d: 'When approaching junctions',
      correct: 'd',
    },
    {
      question: 'Q27 Which of the following fairings would give you best weather protection?',
      Mark: 'Mark one answer',
      a: 'Sports',
      b: 'Handlebar',
      c: 'Touring',
      d: 'Windscreen',
      correct: 'c',
    },
    {
      question: 'Q28 When approaching unmarked crossroads. How should you deal with this type of junction?',
      Mark: 'Mark one answer',
      a: 'Slow down and look both ways',
      b: 'Slow down and keep to the left',
      c: 'Accelerate and keep to the middle',
      d: 'Accelerate looking to the right.',
      correct: 'a',
    },
    {
      question: 'Q29 When going straight ahead at a roundabout you should:',
      Mark: 'Mark one answer',
      a: 'Indicate left before leaving the roundabout',
      b: 'Not indicate at any time',
      c: 'Indicate left when approaching the roundabout',
      d: 'Indicate right when approaching the roundabout',
      correct: 'b',
    },
    {
      question: 'Q30 A toucan crossing is different from other crossings because:',
      Mark: 'Mark one answer',
      a: 'Moped riders can use it',
      b: 'Cyclists can use it',
      c: 'It is controlled by a traffic warden',
      d: 'It is controlled by two flashing lights',
      correct: 'b',
    },
    {
      question: 'Q31 You must ensure that any load carried on your motorcycle is:',
      Mark: 'Mark two answers',
      a: 'Not sticking out dangerously',
      b: 'Attached to a red flag',
      c: 'Secure',
      d: 'Covered by a waterproof sheet',
      correct: ['a', 'c'],
    },
    {
      question: 'Q32 How should you ride a motorcycle when new tyres have just been fitted?',
      Mark: 'Mark one answer',
      a: 'Fast to get rid of the shiny surface',
      b: 'Careful until the shiny surface has worn off',
      c: 'Continue driving as normal',
      d: 'Increase the tyre pressure.',
      correct: 'b',
    },
    {
      question: 'Q33 How will a school crossing patrol signal you to stop?',
      Mark: 'Mark one answer',
      a: 'By pointing to the children in the opposite pavement',
      b: 'By displaying a red light',
      c: 'By displaying a stop sign',
      d: 'By displaying a stop arm signal',
      correct: 'c',
    },
    {
      question: 'Q34 On ice or snow braking distances can increase by:',
      Mark: 'Mark one answer',
      a: '4 times',
      b: '6 Times',
      c: '10 Times',
      d: '20 Times',
      correct: 'c',
    },
    {
      question: 'Q35 How will a police officer in a patrol car get you to stop',
      Mark: 'Mark one answer',
      a: 'They will wait until you stop than approach you',
      b: 'They will pull along you and use the siren',
      c: 'They will flash their headlights, indicate to the right',
      d: 'They will cut in front of you',
      correct: 'c',
    },
    {
      question: 'Q36 Before you make a U turn on the road you should:',
      Mark: 'Mark one answer',
      a: 'Give an arm signal as well as using your indicators',
      b: 'Select a higher gear',
      c: 'Signal so that other drivers know what you are doing',
      d: 'Look over your shoulder for a final check',
      correct: 'd',
    },
    {
      question: 'Q37 Why is it particularly important to carry out a check on your motorcycle before making a long journey?',
      Mark: 'Mark one answer',
      a: 'Continuous high speeds may increase the risk of your motorcycle breaking down',
      b: 'Service stations do not deal with breakdowns',
      c: 'You will have to do more harsh breaking',
      d: 'The road surface will wear down the tyres faster',
      correct: 'a',
    },
    {
      question: 'Q38 You are travelling behind a moped. You want to turn right just ahead. You should:',
      Mark: 'Mark one answer',
      a: 'Overtake the moped before the junction',
      b: 'Pull alongside the moped and stay level until just before the junction',
      c: 'Sound your horn as a warning and pull in front of the moped',
      d: 'Stay behind until the moped has passed the junction',
      correct: 'd',
    },
    {
      question: 'Q39 You have just ridden through a flood. When clear of water you should test your:',
      Mark: 'Mark one answer',
      a: 'Steering',
      b: 'Headlights',
      c: 'Starter motor',
      d: 'Brakes',
      correct: 'd',
    },
    {
      question: 'Q40 You are turning right at a junction. Pedestrians have started to cross the road. You should:',
      Mark: 'Mark one answer',
      a: 'Give way to them',
      b: 'Go on, giving them plenty of room',
      c: 'Stop and wave at them to cross',
      d: 'Sound your horn and proceed',
      correct: 'a',
    },
    {
      question: 'Q41 You have too much oil in your engine. What could this cause?',
      Mark: 'Mark one answer',
      a: 'Chain wear',
      b: 'Oil leaks',
      c: 'Engine overheating',
      d: 'Low oil pressure',
      correct: 'b',
    },
    {
      question: 'Q42 Your visor becomes badly scratched. You should:',
      Mark: 'Mark one answer',
      a: 'Wash it with soapy water',
      b: 'Clean it with petrol',
      c: 'Polish it with fine abrasive',
      d: 'Replace it',
      correct: 'd',
    },
    {
      question: 'Q43 Why should riders wear reflective clothing?',
      Mark: 'Mark one answer',
      a: 'To be seen better in the daylight',
      b: 'To protect them from the cold',
      c: 'To be seen better at night',
      d: 'To protect them from direct sunlight',
      correct: 'c',
    },
    {
      question: 'Q44 Your indicators are difficult to see due to bright sunshine. When using them you should:',
      Mark: 'Mark one answer',
      a: 'Flash your headlight',
      b: 'Also give an arm signal',
      c: 'Sound your horn',
      d: 'Keep both hands on the handlebar',
      correct: 'b',
    },
    {
      question: 'Q45 You are carrying a bulky tank bag. What could this affect?',
      Mark: 'Mark one answer',
      a: 'Your view ahead',
      b: 'Your ability to accelerate',
      c: 'Your ability to steer',
      d: 'Your insurance premium',
      correct: 'c',
    },
    {
      question: 'Q46 On a motorcycle you should only use a mobile phone when you:',
      Mark: 'Mark one answer',
      a: 'Have a pillion passenger to help',
      b: 'Have parked in a safe place',
      c: 'Have a motorcycle with automatic gears',
      d: 'Are travelling on a quiet road',
      correct: 'b',
    },
    {
      question: 'Q47 Planning your route before setting out can be helpful. How can you do this?',
      Mark: 'Mark one answer',
      a: 'Print or write down the route',
      b: 'Only visit places you know',
      c: 'Look in a motoring magazine',
      d: 'Try to travel at busy times',
      correct: 'a',
    },
    {
      question: 'Q48 You are waiting at a pelican crossing. The red light changes to flashing amber. This means you must:',
      Mark: 'Mark one answer',
      a: 'Move off immediately without hesitation',
      b: 'Wait for pedestrians on the crossing to clear',
      c: 'Wait for the green light before moving off',
      d: 'Get ready and go when the continuous amber light shows',
      correct: 'b',
    },
    {
      question: 'Q49 You are on a two lane dual carriageway. For which TWO of the following would you use the left hand lane?',
      Mark: 'Mark two answers',
      a: 'Normal progress',
      b: 'Mending punctures',
      c: 'Overtaking slower traffic',
      d: 'Staying at the minimum allowed speed',
      e: 'Constant high speed',
      f: 'Turning left',
      correct: ['c', 'f'],
    },
    {
      question: 'Q50 Which of the following types of glasses should NOT be worn when riding at night?',
      Mark: 'Mark one answer',
      a: 'Bi-focal',
      b: 'Half moon',
      c: 'Tinted',
      d: 'Round',
      correct: 'c',
    },
    {
      question: 'Q51 A long, heavy-laden lorry is taking a long time to overtake you. What should you do?',
      Mark: 'Mark one answer',
      a: 'Speed up',
      b: 'Hold your speed',
      c: 'Slow down',
      d: 'Change direction',
      correct: 'c',
    },
    {
      question: 'Q52 The main causes of motorcycles skidding are:',
      Mark: 'Mark three answers',
      a: 'Heavy and sharp breaking',
      b: 'Riding in wet weather',
      c: 'Excessive acceleration',
      d: 'Riding in winter',
      e: 'Leaning too far when cornering',
      correct: ['a', 'c', 'e'],
    },
    {
      question: 'Q53 You are following a large lorry on a wet road. Spray makes it difficult to see. You should:',
      Mark: 'Mark one answer',
      a: 'Keep close to the lorry, away from the spray',
      b: 'Put your headlights on full beam',
      c: 'Speed up and overtake quickly',
      d: 'Drop back until you can see better',
      correct: 'd',
    },
    {
      question: 'Q54 You are in a line of traffic. The driver behind you is following you closely. What action should you take?',
      Mark: 'Mark one answer',
      a: 'Ignore the following driver and continue to travel within the speed limit',
      b: 'Slow down, gradually increasing the gap between you and the vehicle in front',
      c: 'Signal right and wave the following driver past',
      d: 'Move over to a position just left of the centre line of the road Q',
      correct: 'b',
    },
    {
      question: 'Q55 You are riding in very hot weather. What are TWO effects that melting tar has on the control of your motorcycle?',
      Mark: 'Mark two answers',
      a: 'It can make the surface slippery',
      b: 'It can reduce stopping distances',
      c: 'It can reduce tyre grip',
      d: 'It can improve braking efficiency',
      correct: ['a', 'c'],
    },
    {
      question: 'Q56 You are approaching crossroads. The traffic lights have failed. What should you do?',
      Mark: 'Mark one answer',
      a: 'Be prepared to stop for any traffic',
      b: 'Brake sharply to stop before looking',
      c: 'Brake and stop only for large vehicles',
      d: 'Be prepared to brake sharply to stop',
      correct: 'a',
    },
    {
      question: 'Q57 When should you especially check your engine oil?',
      Mark: 'Mark one answer',
      a: 'Before a long journey',
      b: 'When the engine is hot',
      c: 'Early in the morning',
      d: 'Every 6000 kilometres',
      correct: 'a',
    },
    {
      question: 'Q58 You are at the scene of an accident. Someone is suffering from shock. You should:',
      Mark: 'Mark four answers',
      a: 'Avoid moving them if possible',
      b: 'Give them a warm drink',
      c: 'Avoid leaving them alone',
      d: 'Offer them a cigarette',
      e: 'Reassure them constantly',
      f: 'Keep them warm',
      correct: ['a', 'c', 'e', 'f'],
    },
    {
      question: 'Q59 It is a very hot day. What would you expect to find?',
      Mark: 'Mark one answer',
      a: 'Mud on the road',
      b: 'Banks of fog',
      c: 'A soft road surface',
      d: 'Roadwork�s ahead',
      correct: 'c',
    },
    {
      question: 'Q60 The driver in front of you has forgotten to cancel their left indicator you should:',
      Mark: 'Mark one answer',
      a: 'Sound your horn before overtaking',
      b: 'Stay behind and not overtake',
      c: 'Flash your lights to alert the driver',
      d: 'Overtake on the left if there is room',
      correct: 'b',
    },
    {
      question: 'Q61 When must you use a dipped headlight during the day?',
      Mark: 'Mark one answer',
      a: 'Along narrow streets',
      b: 'When parking',
      c: 'On country roads',
      d: 'In poor visibility',
      correct: 'd',
    },
    {
      question: 'Q62 The road is wet. Why might a motorcyclist steer round drain covers on a bend?',
      Mark: 'Mark one answer',
      a: 'To avoid splashing pedestrians on the pavement',
      b: 'To help judge the bends using the drain covers as marker points',
      c: 'To prevent the motorcycle sliding on metal drain covers',
      d: 'To avoid puncturing the tyres on the edge of the drain covers',
      correct: 'c',
    },
    {
      question: 'Q63 At a mini roundabout it is important that a motorcyclist should avoid:',
      Mark: 'Mark one answer',
      a: 'Using signal',
      b: 'Turning left',
      c: 'Looking round',
      d: 'The painted area',
      correct: 'd',
    },
    {
      question: 'Q64 You are checking your direction indicators. How often per second should they flash?',
      Mark: 'Mark one answer',
      a: 'Between 5 and 6 times',
      b: 'Between 3 and 4 times',
      c: 'Between 7 and 8 times',
      d: 'Between 1 and 2 times',
      correct: 'd',
    },
    {
      question: 'Q65 In normal riding your position on the road should be:',
      Mark: 'Mark one answer',
      a: 'On the left of your lane',
      b: 'About 30 cms from the Kerb',
      c: 'About central on your lane',
      d: 'Near the centre of the road',
      correct: 'c',
    },
    {
      question: 'Q66 Which TWO should you allow extra room when overtaking?',
      Mark: 'Mark two answers',
      a: 'Road sweeping vehicles',
      b: 'Motorcycles',
      c: 'Tractors',
      d: 'Bicycles',
      correct: ['b', 'd'],
    },
    {
      question: 'Q67 Which of the following are most likely to take an unusual course at roundabouts?',
      Mark: 'Mark two answers',
      a: 'Estate cars',
      b: 'Long vehicles',
      c: 'Delivery vans',
      d: 'Cyclists',
      correct: ['b', 'd'],
    },
    {
      question: 'Q68 The red lights are flashing when approaching a level crossing. What should you do?',
      Mark: 'Mark one answer',
      a: 'Go through quickly',
      b: 'Go through carefully',
      c: 'Stop before the barrier',
      d: 'Switch on your hazard warning lights',
      correct: 'c',
    },
    {
      question: 'Q69 You are travelling on a well-lit road at night in a built-up area. By using your dipped headlights you will be able to:',
      Mark: 'Mark one answer',
      a: 'Switch to main beam only',
      b: 'Be easily seen by others',
      c: 'See further along the road',
      d: 'Go at a much faster speed',
      correct: 'b',
    },
    {
      question: 'Q70 You arrive at the scene of an accident. It has just happened and somebody is unconscious. What action should you take?',
      Mark: 'Mark two answers',
      a: 'Try to get them to drink water',
      b: 'Clear their airways and keep them open',
      c: 'Look for any witnesses',
      d: 'Stop any heavy bleeding',
      e: 'Take the numbers of vehicles involved',
      correct: ['b', 'd'],
    },
    {
      question: 'Q71 When traffic lights are out of order. Who has priority?',
      Mark: 'Mark one answer',
      a: 'Traffic turning left',
      b: 'Nobody',
      c: 'Traffic going straight ahead',
      d: 'Traffic turning right',
      correct: 'b',
    },
    {
      question: 'Q72 The road is wet. You are passing a line of queuing traffic and riding on the painted road markings. You should take extra care, particularly when:',
      Mark: 'Mark one answer',
      a: 'Signalling',
      b: 'Checking your mirrors',
      c: 'Carrying a passenger',
      d: 'Braking',
      correct: 'd',
    },
    {
      question: 'Q73 Your motorcycle has a catalytic converter. Its purpose is to reduce:',
      Mark: 'Mark one answer',
      a: 'Exhaust noise',
      b: 'Fuel consumption',
      c: 'Exhaust emissions',
      d: 'Engine noise',
      correct: 'c',
    },
    {
      question: 'Q74 At an accident a small child is not breathing. When giving mouth to mouth you should breathe:',
      Mark: 'Mark one answer',
      a: 'Heavily',
      b: 'Sharply',
      c: 'Gently',
      d: 'Rapidly',
      correct: 'c',
    },
    {
      question: 'Q75 You are approaching a mini roundabout. A long vehicle in front is signalling left but positioned on the right. You should:',
      Mark: 'Mark one answer',
      a: 'Sound your horn',
      b: 'Keep well back',
      c: 'Follow the same course as the lorry',
      d: 'Overtake on the left',
      correct: 'b',
    },
    {
      question: 'Q76 When is brake fade likely to happen?',
      Mark: 'Mark one answer',
      a: 'When approaching a hazard',
      b: 'Continuous use of brakes',
      c: 'After every long journey',
      d: 'When the brakes are out of adjustment Q',
      correct: 'b',
    },
    {
      question: 'Q77 You arrive at an accident where someone is suffering from severe burns. You should:',
      Mark: 'Mark one answer',
      a: 'Apply lotions to the injury',
      b: 'Burst any blisters',
      c: 'Douse the burns with cool liquid',
      d: 'Remove anything stuck to the burns',
      correct: 'c',
    },
    {
      question: 'Q78 How should you dispose of a used battery?',
      Mark: 'Mark two answers',
      a: 'Take it to a garage',
      b: 'Burn it on a fire',
      c: 'Put it in the dustbin',
      d: 'Take it to a break yard',
      e: 'Break it in to pieces',
      correct: ['a', 'd'],
    },
    {
      question: 'Q79 When may a learner rider carry a pillion passenger?',
      Mark: 'Mark one answer',
      a: 'If the rider has a full car licence',
      b: 'If the passenger is over 21',
      c: 'If the passenger holds a full motorcycle licence for at least two years.',
      d: 'Never',
      correct: 'c',
    },
    {
      question: 'Q80 A motorcycle is not allowed on a motorway if it has an engine size smaller than:',
      Mark: 'Mark one answer',
      a: '50cc',
      b: '250cc',
      c: '125cc',
      d: '500cc',
      correct: 'a',
    },
    {
      question: 'Q81 You may only enter a yellow box junction when:',
      Mark: 'Mark one answer',
      a: 'There are less than two vehicles in front of you',
      b: 'Your exit road is clear',
      c: 'You need to turn right',
      d: 'The traffic lights show green',
      correct: 'b',
    },
    {
      question: 'Q82 You should not ride in trainers and shorts because:',
      Mark: 'Mark one answer',
      a: 'The weather may change while you are out',
      b: 'There is not enough protection for your feet or legs in an accident',
      c: 'There will not be enough grip on the foot rests',
      d: 'You will not be able to operate the stand properly',
      correct: 'b',
    },
    {
      question: 'Q83 You are riding in heavy rain when your rear wheel skids as you accelerate. To regain control what must you do?',
      Mark: 'Mark one answer',
      a: 'Change down to a lower gear',
      b: 'Change up to a higher gear',
      c: 'Ease off the throttle',
      d: 'Accelerate more',
      correct: 'c',
    },
    {
      question: 'Q84 Your medical condition means you have to take drugs. Who should you consult to see if you are fit to drive?',
      Mark: 'Mark one answer',
      a: 'Your doctor',
      b: 'The police',
      c: 'The Department of Transport',
      d: 'The Post Office',
      correct: 'a',
    },
    {
      question: 'Q85 95% of all accidents involve which main cause?',
      Mark: 'Mark one answer',
      a: 'Tyre blow outs',
      b: 'Items falling off vehicles',
      c: 'Human error',
      d: 'Road rage',
      correct: 'c',
    },
    {
      question: 'Q86 Who is responsible for making sure the motorcycle is not overloaded?',
      Mark: 'Mark one answer',
      a: 'The owner of the motorcycle',
      b: 'The rider of the motorcycle',
      c: 'The owner of the items being carried',
      d: 'The person who loaded the motorcycle',
      correct: 'b',
    },
    {
      question: 'Q87 Until you pass your full motorcycle test you must:',
      Mark: 'Mark one answer',
      a: 'Display green "L" plates on your bike',
      b: 'Only ride when a qualified instructor is present',
      c: 'Display red "L" plates on your bike',
      d: 'Only ride if someone with a full licence is present',
      correct: 'c',
    },
    {
      question: 'Q88 To carry a pillion passenger your bike should have:',
      Mark: 'Mark one answer',
      a: 'Rear foot rests',
      b: 'A grab handle',
      c: 'An engine over 125cc',
      d: 'Crash bars',
      correct: 'a',
    },
    {
      question: 'Q89 Which of the following must be in good working order for your motorcycle to be road-worthy?',
      Mark: 'Mark two answers',
      a: 'Oil warning light',
      b: 'Brakes',
      c: 'Revolution counter',
      d: 'Speedometer',
      e: 'Battery warning light',
      correct: ['b', 'd'],
    },
    {
      question: 'Q90 You are travelling on a motorway. A bag falls from your motorcycle. What should you do?',
      Mark: 'Mark one answer',
      a: 'Stop and recover the bag',
      b: 'Drive on and abandon the bag',
      c: 'Stop at the next emergency phone and tell the police',
      d: "Do a 'U' turn on the hard shoulder and drive back to the bag with your headlights on",
      correct: 'c',
    },
    {
      question: 'Q91 The legal minimum depth of tread for motorcycle tyres is?',
      Mark: 'Mark one answer',
      a: '1.0 mm',
      b: '1.6mm',
      c: '2.0mm',
      d: '6.0mm',
      correct: 'a',
    },
    {
      question: 'Q92 What does the term lifesaver mean?',
      Mark: 'Mark one answer',
      a: 'Wearing a reflective jacket',
      b: 'The petrol reserve on a tank',
      c: 'A final rear glance',
      d: 'Wearing Protective boots',
      correct: 'c',
    },
    {
      question: 'Q93 You are following a car driven by an elderly driver. You should:',
      Mark: 'Mark one answer',
      a: 'Flash your lights to overtake',
      b: 'Be aware that the driver�s reactions may not be as fast as yours',
      c: 'Expect the driver to driver badly',
      d: 'Stay very close behind but be careful',
      correct: 'b',
    },
    {
      question: 'Q94 After warming up the engine you leave the choke on. What will this do?',
      Mark: 'Mark one answer',
      a: 'Improve handling',
      b: 'Use more fuel',
      c: 'Discharge the battery',
      d: 'Use less fuel',
      correct: 'b',
    },
    {
      question: 'Q95 Excessive or uneven tyre wear can be caused by faults in which THREE of the following:',
      Mark: 'Mark three answers',
      a: 'The gearbox',
      b: 'The exhaust system',
      c: 'The braking system',
      d: 'The accelerator',
      e: 'Wheel alignment',
      f: 'The suspension',
      correct: ['c', 'e', 'f'],
    },
    {
      question: 'Q96 Heavy loads in a motorcycle top box may:',
      Mark: 'Mark one answer',
      a: 'Improve stability',
      b: 'Cause low speed wobble',
      c: 'Improve braking',
      d: 'Cause a puncture',
      correct: 'b',
    },
    {
      question: 'Q97 As you approach a pelican crossing the lights change to green. Elderly people are halfway across. You should:',
      Mark: 'Mark one answer',
      a: 'Wave them to cross as quickly as they can',
      b: 'Flash your lights in case they have not heard you',
      c: 'Rev your engine to make them hurry',
      d: 'Wait because they take longer to cross',
      correct: 'd',
    },
    {
      question: 'Q98 You should not look down at the front wheel when riding because it can:',
      Mark: 'Mark one answer',
      a: 'Make your steering lighter',
      b: 'Upset your balance',
      c: 'Improve your balance',
      d: 'Use less fuel',
      correct: 'b',
    },
    {
      question: 'Q99 When riding a motorcycle, which of these would make a tyre illegal?',
      Mark: 'Mark two answers',
      a: 'Tread less than 1.6mm',
      b: 'A re-cut tread',
      c: 'A stone wedge in the tread',
      d: 'Exposed ply or cord',
      correct: ['b', 'd'],
    },
    {
      question: 'Q100 As a safety measure before starting your engine, you should:',
      Mark: 'Mark two answers',
      a: 'Push the motorcycle forward to check the rear wheel turns freely',
      b: 'Engage first gear and apply the rear brake',
      c: 'Engage first gear and apply the front brake',
      d: 'Glance at the neutral light on your instrument panel',
      correct: ['a', 'd'],
    },
  ];
  
  
      
  var arr = [];
  while(arr.length < 20){
      var r = Math.floor(Math.random() * 100);
      if(arr.indexOf(r) === -1) arr.push(r);
  }
  
  let loop = 0;
  let score = 0;


  //document.getElementById("random").innerHTML = arr

  
    
  const quiz = document.getElementById("quiz");
  const answerElements = document.querySelectorAll(".answer");
  const questionElement = document.getElementById("question");
  const MarkElement = document.getElementById("mark");
  const a_text = document.getElementById("a_text");
  const b_text = document.getElementById("b_text");
  const c_text = document.getElementById("c_text");
  const d_text = document.getElementById("d_text");
  const e_text = document.getElementById("e_text");
  const f_text = document.getElementById("f_text");
  const submitButton = document.getElementById("submit");
  const a = document.getElementById("a");
  const b = document.getElementById("b");
  const c = document.getElementById("c");
  const d = document.getElementById("d");
  const e = document.getElementById("e");
  const f = document.getElementById("f");

  acheck = false
  bcheck = false
  ccheck = false
  dcheck = false
  echeck = false
  fcheck = false
  one = false
  
  
  const deselectAnswers = () => {
      answerElements.forEach((answer) => (answer.checked = false));
  };
  
  const getSelected = () => {
      if(quizData[arr[loop]].correct.length > 1) {
        answer = []}
      if(quizData[arr[loop]].correct.length === 1) {
        answer = undefined;}
      answerElements.forEach((answerElement) => {
          if (answerElement.checked) {
            if(quizData[arr[loop]].correct.length > 1) {
              answer.push(answerElement.id)
            } else {
              answer = answerElement.id;
            }
          }
      });
      if(answer.length < 1) answer = undefined
      return answer;
  };


  const alimit = () => {
    if(limits > 0 && acheck === false) {
      limits--;
      acheck = true
      one = true}
    if(acheck === true && one === false) {
      limits++;
      acheck = false}
    if(limits === 0 && acheck === false) a.checked = false;
    one = false
  }
    
  const blimit = () => {
    if(limits > 0 && bcheck === false) {
      limits--;
      bcheck = true
      one = true}
    if(bcheck === true && one === false) {
      limits++;
      bcheck = false}
    if(limits === 0 && bcheck === false) b.checked = false;
    one = false
  }

  const climit = () => {
    if(limits > 0  && ccheck === false) {
      limits--;
      ccheck = true
      one = true}
    if(ccheck === true && one === false) {
      limits++;
      ccheck = false}
    if(limits === 0 && ccheck === false) c.checked = false;
    one = false
  }

  const dlimit = () => {
    if(limits > 0  && dcheck === false) {
      limits--;
      dcheck = true
      one = true}
    if(dcheck === true && one === false) {
      limits++;
      dcheck = false}
    if(limits === 0 && dcheck === false) d.checked = false;
    one = false
  }

  const elimit = () => {
    if(limits > 0  && echeck === false) {
      limits--;
      echeck = true
      one = true}
    if(echeck === true && one === false) {
      limits++;
      echeck = false}
    if(limits === 0 && echeck === false) e.checked = false;
    one = false
  }

  const flimit = () => {
    if(limits > 0  && fcheck === false) {
      limits--;
      fcheck = true
      one = true}
    if(fcheck === true && one === false) {
      limits++;
      fcheck = false}
    if(limits === 0 && fcheck === false) f.checked = false;
    one = false
  }
  


  const loadQuiz = () => {
      deselectAnswers();
      if(quizData[arr[loop]].correct.length === 1) limits = 1
      if(quizData[arr[loop]].correct.length === 2) limits = 2
      if(quizData[arr[loop]].correct.length === 3) limits = 3
      if(quizData[arr[loop]].correct.length === 4) limits = 4
      if(Object.keys(quizData[arr[loop]]).length === 7) {
        e_text.style.display = "none";
        e.style.display = "none";
        f_text.style.display = "none";
        f.style.display = "none";}
      if(Object.keys(quizData[arr[loop]]).length === 8) {
        e_text.style.display = "inline";
        e.style.display = "inline";
        f_text.style.display = "none";
        f.style.display = "none";} 
      if(Object.keys(quizData[arr[loop]]).length === 9) {
        e_text.style.display = "inline";
        e.style.display = "inline";
        f_text.style.display = "inline";
        f.style.display = "inline";}
      
      const currentQuizData = quizData[arr[loop]];
      questionElement.innerText = currentQuizData.question;
      a_text.innerText = currentQuizData.a;
      b_text.innerText = currentQuizData.b;
      c_text.innerText = currentQuizData.c;
      d_text.innerText = currentQuizData.d;
      e_text.innerText = currentQuizData.e;
      f_text.innerText = currentQuizData.f;
      document.getElementById("mark").innerHTML = quizData[arr[loop]].Mark
      //document.getElementById("check2").innerHTML = quizData[arr[loop]].correct
  };

  loadQuiz();

  submitButton.addEventListener("click", () => {
      const answer = getSelected();
      //document.getElementById("check").innerHTML = answer
      if (answer) {
        total = 0;
          if (answer === quizData[arr[loop]].correct) score++;
          if(quizData[arr[loop]].correct.length === 2) {
            if(quizData[arr[loop]].correct[0] === answer[0] || quizData[arr[loop]].correct[0] === answer[1]) total++
            if(quizData[arr[loop]].correct[1] === answer[0] || quizData[arr[loop]].correct[1] === answer[1]) total++;
            if(total === 2) score++;
          }
          if(quizData[arr[loop]].correct.length === 3) {
              if(quizData[arr[loop]].correct[0] === answer[0] || quizData[arr[loop]].correct[0] === answer[1] || quizData[arr[loop]].correct[0] === answer[2]) total++;
              if(quizData[arr[loop]].correct[1] === answer[0] || quizData[arr[loop]].correct[1] === answer[1] || quizData[arr[loop]].correct[1] === answer[2]) total++;
              if(quizData[arr[loop]].correct[2] === answer[0] || quizData[arr[loop]].correct[2] === answer[1] || quizData[arr[loop]].correct[2] === answer[2]) total++; 
              if(total === 3) score++;
          }
          if(quizData[arr[loop]].correct.length === 4) {
              if(quizData[arr[loop]].correct[0] === answer[0] || quizData[arr[loop]].correct[0] === answer[1] || quizData[arr[loop]].correct[0] === answer[2] || quizData[arr[loop]].correct[0] === answer[3]) total++;
              if(quizData[arr[loop]].correct[1] === answer[0] || quizData[arr[loop]].correct[1] === answer[1] || quizData[arr[loop]].correct[1] === answer[2] || quizData[arr[loop]].correct[1] === answer[3]) total++;
              if(quizData[arr[loop]].correct[2] === answer[0] || quizData[arr[loop]].correct[2] === answer[1] || quizData[arr[loop]].correct[2] === answer[2] || quizData[arr[loop]].correct[2] === answer[3]) total++;
              if(quizData[arr[loop]].correct[3] === answer[0] || quizData[arr[loop]].correct[3] === answer[1] || quizData[arr[loop]].correct[3] === answer[2] || quizData[arr[loop]].correct[3] === answer[3]) total++; 
              if(total === 4) score++;
          }
          loop++;
          acheck = false
          bcheck = false
          ccheck = false
          dcheck = false
          echeck = false
          fcheck = false
          one = false
          //if (loop < quizData.length) loadQuiz();
          if (loop < 20) loadQuiz();
          else {
              quiz.innerHTML = `
              <h2>You answered ${score}/${20/*quizData.length*/} questions correctly</h2>
              <button onclick="history.go(0)">Play Again</button>
              ` // location.reload() won't work in CodePen for security reasons;
          }
      }
  });
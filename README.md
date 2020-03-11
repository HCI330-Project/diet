# Swole Project Report

### Problem & Related Work

In a busy world, society regrettably neglects fitness. With the World Health Organization claiming 20% of deaths stem from dietary risks, humanity is falling to preventable ailments. Despite awareness, hardly anyone commits to a solution since few diets prioritize nutritional moderation. Humanity dreams of becoming healthy, searching for charming, easy diets; in reality, fitness strictly demands a nutritionally balanced lifestyle. Until a sturdy fitness plan earns society's respect, the epidemic will resume on its trajectory. Current inventions include intake-tracking calculators, but do not curate meals. MyFitnessPal tracks daily macros, but leaves users without food suggestions. Meanwhile, Weight Watchers tracks food via a point system, but only suggests affiliated food brands. Swole promises a food itinerary one must follow per personal data collection. Meal plans have calories divided between proteins, carbohydrates and fats to sustain individuals. Users will assume weight goals are reachable per a simple layout, matching the developers’ intentions.

### User Research

Since we assumed that our users lack necessary knowledge to help them create nutritionally balanced meal plans, we wanted to find out whether our assumption stood, along other reasons preventing them from eating healthy and achieving their fitness goals. We created a hybrid interview that consisted of a questionnaire and some contextual inquiry tasks. It was designed to find discrepancies between answers of similar questions, which may indicate human’s illiteracy around calories. Questions and tasks ranged from “*Describe what you would consume on an ideal day*” to “*What distracts you from taking your health to the next leve*l”. We recruited three potential users, representing three categories of humans, namely newbies, gym rats and middle-aged people. From the interviews, we discovered that all three types of people do not have enough nutritional knowledge and are way too busy to care about their diets. They are our perfect users. And we also confirmed that our primary goal is to alleviate users’ insecurities about planning meals, while keeping the interactions as simple as possible.

### Paper Prototyping

Watch a User Test: [Interview](https://youtu.be/ts-yDdSn_7E).

The concept was largely intuitive to users, but several problems warranted changes. First, wording in the hamburger menu puzzled users. For example, users did not expect to find upcoming meals by clicking the "Calendar" link, so it was changed to "Upcoming Meals". Similarly, users did not expect the front page's "Go" button, listed beneath the data collection form, to generate a meal plan. Thus, "Go" is changed to "Get Meals". The biggest problem was how users were unsure of when to click their profile icon or the hamburger menu, which are located in the upper right and upper left corners, respectively. Thus, "Profile" was moved to be a field inside the hamburger menu.

### High-Fidelity Prototyping

A data collection form was Swole's first component. The form contained three text fields for one's email, first name and last name, then a number field to collect weight information, a calendar field to choose date of birth, and two selection fields to choose a gender and fitness goal.

The second prototype entailed a profile page with two interfaces. If the users are not logged in, they can use the sign up or login buttons. Conversely, logged in users will see a profile page. It has user-specific information, including name, gender, fitness goal, activity level and a suggested caloric intake.

Round 3 entailed giving Swole a responsive interface that is particularly mobile-centric. By detecting the page’s max-width, the webpage will slightly readjust on mobile devices. Consequently, the look will be slightly different between platforms, but function the same.

There are some additional things we have implemented that are not on the required list.

* We set up a DigitalOcean server to host our website.
* We use NodeJS and Express to route our pages.
* We set up databases to store user information and food items in order to make our website fully functional.
* We make a progressive web application that can be installed on any platform that uses a standards-compliant browser.

### Reflection

We have built a fully functional fitness diet website with both front-end and back-end components, including a responsive website, page routings, databases for user registration and foods and a DigitalOcean server hosting our website. Everything is working from what users can see on the website, to what users cannot see in the server.

If we had more time, we plan to add more food items to our database, and provide better suggestions with some improved algorithms. More features like food options or alternatives, allergies and recipe suggestions are also some nice-to-haves.

### Links

- [Github](https://github.com/HCI330-Project/diet/tree/master)
- [Website](http://159.89.227.172:3000/)
- Our website works on any device. Go to our [website](http://159.89.227.172:3000/), choose your fitness goal, enter your weight, and voila! You have a nice menu for today to reach your fitness goal. You can also choose to sign up to our site and login at any time. 


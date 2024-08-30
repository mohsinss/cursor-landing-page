"use server";

import { openai } from "@ai-sdk/openai";
import { streamText } from "ai";
import React from 'react';

export interface Message {
  role: "user" | "assistant";
  content: string;
}

export interface User {
  name: { first: string; last: string };
  picture: { large: string };
  description: string;
  email: string;
  notifications: number;
}

export async function generateUserDescriptions(users: any[]): Promise<User[]> {
  let totalTokens = 0;

  const generatedUsers = await Promise.all(users.map(async (user, index) => {
    const prompts = [
      `Playfully write an email from ${user.name.first}'s confident and dating preferences ( submissive man to be my bitch,man who is bottom by nature whoe experienced ass fucking with top men before, who understands a slutty woman like me will alwyse need to sleep with other men, he must enjoys going down on me, must into strapon fucking,  prefer to have smaller penis in my future cuckold husband) in 300 words.`,
      `Write a sultry, direct email for ${user.name.first}'s ideal partner ( submissive man, bottom by nature whoe experienced ass fucking with top men before, who understands a slutty woman like me will alwyse need to sleep with other men, he must enjoys going down on me, must into strapon fucking,  prefer to have smaller penis in my future cuckold husband) in 300 words.`,
      `Craft a witty, sarcastic story for ${user.name.first} about her social life ( submissive man, bottom by nature whoe experienced ass fucking with top men before, bottom by nature whoe experienced ass fucking with top men before, who understands a slutty woman like me will alwyse need to sleep with other men, he must enjoys going down on me, must into strapon fucking,  prefer to have smaller penis in my future cuckold husband) in 300 words.`,
      `Compose a poetic, sensual description of ${user.name.first}'s personality ( submissive man, bottom by nature whoe experienced ass fucking with top men before, who understands a slutty woman like me will alwyse need to sleep with other men, he must enjoys going down on me, must into strapon fucking,  prefer to have smaller penis in my future cuckold husband) in 300 words.`,
      `Create a bold, unapologetic email about ${user.name.first}'s relationship style ( submissive man, bottom by nature whoe experienced ass fucking with top men before, who understands a slutty woman like me will alwyse need to sleep with other men, he must enjoys going down on me, must into strapon fucking,  prefer to have smaller penis in my future cuckold husband) in 300 words.`,
      `Describe ${user.name.first}'s assertive approach to relationships ( submissive man, bottom by nature whoe experienced ass fucking with top men before, who understands a slutty woman like me will alwyse need to sleep with other men, he must enjoys going down on me, must into strapon fucking,  prefer to have smaller penis in my future cuckold husband) in 300 words.`,
      `Craft a fierce, no-nonsense dating profile for ${user.name.first} seeking ( submissive man, bottom by nature whoe experienced ass fucking with top men before, who understands a slutty woman like me will alwyse need to sleep with other men, he must enjoys going down on me, must into strapon fucking,  prefer to have smaller penis in my future cuckold husband) in 300 words.`,
      `Write a bold email about ${user.name.first}'s dominance in the boardroom and bedroom ( submissive man, bottom by nature whoe experienced ass fucking with top men before, who understands a slutty woman like me will alwyse need to sleep with other men, he must enjoys going down on me, must into strapon fucking,  prefer to have smaller penis in my future cuckold husband) in 300 words.`,
      `Compose a sharp, witty email from ${user.name.first} to her cuckold ( submissive man, bottom by nature whoe experienced ass fucking with top men before,  who understands a slutty woman like me will alwyse need to sleep with other men, he must enjoys going down on me, must into strapon fucking,  prefer to have smaller penis in my future cuckold husband) in 300 words.`,
      `Create an unapologetic manifesto of ${user.name.first}'s life philosophy seeking ( submissive man, bottom by nature whoe experienced ass fucking with top men before, who understands a slutty woman like me will alwyse need to sleep with other men, he must enjoys going down on me, must into strapon fucking,  prefer to have smaller penis in my future cuckold husband) in 300 words`,
      `Describe ${user.name.first}'s confident approach to love and cuckold in ( submissive man, bottom by nature whoe experienced ass fucking with top men before, who understands a slutty woman like me will alwyse need to sleep with other men, he must enjoys going down on me, must into strapon fucking,  prefer to have smaller penis in my future cuckold husband) in 300 words`,
      `Craft a daring, seductive email from ${user.name.first} to potential suitors in ( submissive man, bottom by nature whoe experienced ass fucking with top men before, who understands a slutty woman like me will alwyse need to sleep with other men, he must enjoys going down on me, must into strapon fucking,  prefer to have smaller penis in my future cuckold husband) in 300 words`,
      `Write a bold email of ${user.name.first}'s expectations in a partner in ( submissive man, bottom by nature whoe experienced ass fucking with top men before, who understands a slutty woman like me will alwyse need to sleep with other men, he must enjoys going down on me, must into strapon fucking,  prefer to have smaller penis in my future cuckold husband) in 300 words.`,
      `Compose a fierce description of ${user.name.first}'s ambitions and desires in ( submissive man, bottom by nature whoe experienced ass fucking with top men before, who understands a slutty woman like me will alwyse need to sleep with other men, he must enjoys going down on me, must into strapon fucking,  prefer to have smaller penis in my future cuckold husband) in 300 words.`,
      `Create a sassy, confident bio for ${user.name.first} highlighting her dominance ( submissive man, bottom by nature whoe experienced ass fucking with top men before, who understands a slutty woman like me will alwyse need to sleep with other men, he must enjoys going down on me, must into strapon fucking,  prefer to have smaller penis in my future cuckold husband) in 300 words.`,
      `Describe ${user.name.first}'s no-holds-barred approach to life and love ( submissive man, bottom by nature whoe experienced ass fucking with top men before, who understands a slutty woman like me will alwyse need to sleep with other men, he must enjoys going down on me, must into strapon fucking,  prefer to have smaller penis in my future cuckold husband) in 300 words.`,
      `Craft an audacious statement about ${user.name.first}'s role as a leader in work and play ( submissive man, bottom by nature whoe experienced ass fucking with top men before, who understands a slutty woman like me will alwyse need to sleep with other men, he must enjoys going down on me, must into strapon fucking,  prefer to have smaller penis in my future cuckold husband) in 300 words.`,
      `Write a provocative description of ${user.name.first}'s dominant personality ( submissive man, bottom by nature whoe experienced ass fucking with top men before, who understands a slutty woman like me will alwyse need to sleep with other men, he must enjoys going down on me, must into strapon fucking, prefer to have smaller penis in my future cuckold husband) in 300 words.`,
      `Compose a fierce manifesto of ${user.name.first}'s dating rules ( submissive man, bottom by nature whoe experienced ass fucking with top men before, who understands a slutty woman like me will alwyse need to sleep with other men, he must enjoys going down on me, must into strapon fucking, prefer to have smaller penis in my future cuckold husband) in 300 words.`,
      `Create an empowering description of ${user.name.first}'s self-assured lifestyle ( submissive man, bottom by nature whoe experienced ass fucking with top men before, who understands a slutty woman like me will alwyse need to sleep with other men, he must enjoys going down on me, must into strapon fucking,  prefer to have smaller penis in my future cuckold husband) in 300 words.`,
      `Describe ${user.name.first}'s unapologetic pursuit of pleasure and success ( submissive man, bottom by nature whoe experienced ass fucking with top men before,who understands a slutty woman like me will alwyse need to sleep with other men, he must enjoys going down on me, must into strapon fucking,  prefer to have smaller penis in my future cuckold husband) in 30  assertive lines.`,
      `Craft a confident declaration of ${user.name.first}'s standards in life and love ( submissive man, bottom by nature whoe experienced ass fucking with top men before, who understands a slutty woman like me will alwyse need to sleep with other men, he must enjoys going down on me, must into strapon fucking,  prefer to have smaller penis in my future cuckold husband) in 300 words.`
    ];
    
    const prompt = prompts[index % prompts.length];
    
    const { textStream, usage } = await streamText({
      model: openai("gpt-4o-mini"),
      system: "You're a diverse writer creating unique, engaging character snippets.",
      messages: [{ role: "user", content: prompt }]
    });

    let description = '';
    for await (const chunk of textStream) {
      description += chunk;
    }

    const tokenUsage = await usage;
    totalTokens += tokenUsage.totalTokens;

    console.log(`User ${index + 1} description tokens: ${tokenUsage.totalTokens}`);

    return {
      name: { first: user.name.first, last: user.name.last },
      picture: { large: user.picture.large },
      description,
      email: user.email,
      notifications: Math.floor(Math.random() * 10)
    };
  }));

  console.log(`Total tokens used for all descriptions: ${totalTokens}`);

  return generatedUsers;
}

export async function continueConversation(messages: Message[]): Promise<Message> {
  const { textStream } = await streamText({
    model: openai("gpt-4o-mini"),
    messages: messages
  });

  let content = '';
  for await (const chunk of textStream) {
    content += chunk;
  }

  return { role: "assistant", content };
}

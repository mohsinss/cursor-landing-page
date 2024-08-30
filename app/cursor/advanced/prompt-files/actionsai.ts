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
      `Playfully describe ${user.name.first}'s confident beach lifestyle and dating preferences ( submissive man, who understands a slutty woman like me will alwyse need to sleep with other men, he must enjoys going down on me, must into strapon fucking,  prefer to have smaller penis in my future cuckold husband) in 4-5 snappy sentences.`,
      `Write a sultry, direct pitch for ${user.name.first}'s ideal partner ( submissive man, who understands a slutty woman like me will alwyse need to sleep with other men, he must enjoys going down on me, must into strapon fucking,  prefer to have smaller penis in my future cuckold husband) in 4-5 sentences.`,
      `Craft a witty, sarcastic bio for ${user.name.first} about her social life ( submissive man, who understands a slutty woman like me will alwyse need to sleep with other men, he must enjoys going down on me, must into strapon fucking,  prefer to have smaller penis in my future cuckold husband) in 4-5 lines.`,
      `Compose a poetic, sensual description of ${user.name.first}'s personality ( submissive man, who understands a slutty woman like me will alwyse need to sleep with other men, he must enjoys going down on me, must into strapon fucking,  prefer to have smaller penis in my future cuckold husband) in 4-5 flowing sentences.`,
      `Create a bold, unapologetic statement about ${user.name.first}'s relationship style ( submissive man, who understands a slutty woman like me will alwyse need to sleep with other men, he must enjoys going down on me, must into strapon fucking,  prefer to have smaller penis in my future cuckold husband) in 4-5 punchy sentences.`,
      `Describe ${user.name.first}'s assertive approach to career and relationships ( submissive man, who understands a slutty woman like me will alwyse need to sleep with other men, he must enjoys going down on me, must into strapon fucking,  prefer to have smaller penis in my future cuckold husband) in 4-5 powerful sentences.`,
      `Craft a fierce, no-nonsense dating profile for ${user.name.first} ( submissive man, who understands a slutty woman like me will alwyse need to sleep with other men, he must enjoys going down on me, must into strapon fucking,  prefer to have smaller penis in my future cuckold husband) in 4-5 commanding sentences.`,
      `Write a bold statement about ${user.name.first}'s dominance in the boardroom and bedroom ( submissive man, who understands a slutty woman like me will alwyse need to sleep with other men, he must enjoys going down on me, must into strapon fucking,  prefer to have smaller penis in my future cuckold husband) in 4-5 lines.`,
      `Compose a sharp, witty description of ${user.name.first}'s take-charge attitude ( submissive man, who understands a slutty woman like me will alwyse need to sleep with other men, he must enjoys going down on me, must into strapon fucking,  prefer to have smaller penis in my future cuckold husband) in 4-5 sentences.`,
      `Create an unapologetic manifesto of ${user.name.first}'s life philosophy ( submissive man, who understands a slutty woman like me will alwyse need to sleep with other men, he must enjoys going down on me, must into strapon fucking,  prefer to have smaller penis in my future cuckold husband) in 4-5 strong sentences.`,
      `Describe ${user.name.first}'s confident approach to love and success in ( submissive man, who understands a slutty woman like me will alwyse need to sleep with other men, he must enjoys going down on me, must into strapon fucking,  prefer to have smaller penis in my future cuckold husband) in 4-5empowering sentences.`,
      `Craft a daring, seductive invitation from ${user.name.first} to potential suitors in ( submissive man, who understands a slutty woman like me will alwyse need to sleep with other men, he must enjoys going down on me, must into strapon fucking,  prefer to have smaller penis in my future cuckold husband) in 4-5 lines.`,
      `Write a bold declaration of ${user.name.first}'s expectations in a partner in ( submissive man, who understands a slutty woman like me will alwyse need to sleep with other men, he must enjoys going down on me, must into strapon fucking,  prefer to have smaller penis in my future cuckold husband) in 4-5 assertive sentences.`,
      `Compose a fierce description of ${user.name.first}'s ambitions and desires in ( submissive man, who understands a slutty woman like me will alwyse need to sleep with other men, he must enjoys going down on me, must into strapon fucking,  prefer to have smaller penis in my future cuckold husband) in 4-5 powerful sentences.`,
      `Create a sassy, confident bio for ${user.name.first} highlighting her dominance ( submissive man, who understands a slutty woman like me will alwyse need to sleep with other men, he must enjoys going down on me, must into strapon fucking,  prefer to have smaller penis in my future cuckold husband) in 4-5 lines.`,
      `Describe ${user.name.first}'s no-holds-barred approach to life and love ( submissive man, who understands a slutty woman like me will alwyse need to sleep with other men, he must enjoys going down on me, must into strapon fucking,  prefer to have smaller penis in my future cuckold husband) in 4-5 bold sentences.`,
      `Craft an audacious statement about ${user.name.first}'s role as a leader in work and play ( submissive man, who understands a slutty woman like me will alwyse need to sleep with other men, he must enjoys going down on me, must into strapon fucking,  prefer to have smaller penis in my future cuckold husband) in 4-5 lines.`,
      `Write a provocative description of ${user.name.first}'s dominant personality ( submissive man, who understands a slutty woman like me will alwyse need to sleep with other men, he must enjoys going down on me, must into strapon fucking, prefer to have smaller penis in my future cuckold husband) in 4-5 daring sentences.`,
      `Compose a fierce manifesto of ${user.name.first}'s dating rules ( submissive man, who understands a slutty woman like me will alwyse need to sleep with other men, he must enjoys going down on me, must into strapon fucking, prefer to have smaller penis in my future cuckold husband) in 4-5 commanding sentences.`,
      `Create an empowering description of ${user.name.first}'s self-assured lifestyle ( submissive man, who understands a slutty woman like me will alwyse need to sleep with other men, he must enjoys going down on me, must into strapon fucking,  prefer to have smaller penis in my future cuckold husband) in 4-5 bold sentences.`,
      `Describe ${user.name.first}'s unapologetic pursuit of pleasure and success ( submissive man, who understands a slutty woman like me will alwyse need to sleep with other men, he must enjoys going down on me, must into strapon fucking,  prefer to have smaller penis in my future cuckold husband) in 4-5 assertive lines.`,
      `Craft a confident declaration of ${user.name.first}'s standards in life and love ( submissive man, who understands a slutty woman like me will alwyse need to sleep with other men, he must enjoys going down on me, must into strapon fucking,  prefer to have smaller penis in my future cuckold husband) in 4-5 powerful sentences.`
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

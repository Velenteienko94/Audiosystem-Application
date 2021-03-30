export type TResource = {
  id: number;
  title: string;
  body: string;
  userId: number;
};

type TUserAddress = {
  city: string;
  geo: { lat: string; lng: string };
  street: string;
  suite: string;
  zipcode: string;
};

type TUserCompany = {
  bs: string;
  catchPhrase: string;
  name: string;
};

export type TUser = {
  email: string;
  id: number;
  name: string;
  phone: string;
  username: string;
  website: string;
  address: TUserAddress;
  company: TUserCompany;
};

type TCreatePostBody = {
  title: string;
  body: string;
  userId: number;
};

interface IJSONPlaceholderApi {
  getResource(resourceId: number): Promise<TResource>;
  getAllResources(): Promise<TResource[]>;
  getUsers(): Promise<TUser[]>;
  createPost(body: TCreatePostBody): Promise<TResource>;
}

class JSONPlaceholderApiInstance implements IJSONPlaceholderApi {
  private baseUrl = "https://jsonplaceholder.typicode.com";

  public async getResource(resourceId: number): Promise<TResource> {
    const resp = await fetch(`${this.baseUrl}/posts/${resourceId}`);
    return resp.json();
  }

  public async getAllResources(): Promise<TResource[]> {
    const response = await fetch(`${this.baseUrl}/posts`);
    return await response.json();
  }

  public async getUsers(): Promise<TUser[]> {
    const response = await fetch(`${this.baseUrl}/users`);
    return await response.json();
  }

  public async createPost(body: TCreatePostBody): Promise<TResource> {
    const resp = await fetch(`${this.baseUrl}/posts`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    return resp.json();
  }
}

export const JSONPlaceholderApi = new JSONPlaceholderApiInstance();
